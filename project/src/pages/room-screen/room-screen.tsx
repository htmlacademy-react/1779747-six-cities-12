import {Helmet} from 'react-helmet-async';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { Navigate, useParams } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import User from '../../components/user/user';
import CommentsForm from '../../components/commets-form/comments-form';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Map from '../../components/map/map';
import OffersList from '../../components/offers-list/offers-list';
import { getOffersData } from '../../store/offers-data/offers-data-selectors';
import { getNearbyOffers, getReviews} from '../../store/room-data/room-data.selectors';
import { sendOfferInRoomIdAction} from '../../store/api-action';
import BookmarkButton from '../../components/bookmark-button/bookmark-button';


export default function RoomScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(sendOfferInRoomIdAction(Number(id)));
  }, [dispatch, id]);

  const offers = useAppSelector(getOffersData);
  const reviews = useAppSelector(getReviews);
  const nearbyOffers = useAppSelector(getNearbyOffers);

  const currentPointOffer = offers.find((offer) => offer.id === Number(id));
  if (currentPointOffer === undefined) {
    return <Navigate to="page-not-found"/>;
  }

  const {title, rating, isPremium, isFavorite, images, type, bedrooms, maxAdults, price, goods, host, description} = currentPointOffer;

  return (
    <section className="room">
      <Helmet>
        <title>6 cities. Приключение того стоит</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <User />
          </div>
        </div>
      </header>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.slice(0, 6).map((image) => (
                <div key={image} className="property__image-wrapper">
                  <img className="property__image" src={image} alt={title} />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium &&
      <div className="property__mark">
        <span>Premium</span>
      </div> }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <BookmarkButton
                  className={'property'}
                  id={Number(id)}
                  isFavorite={isFavorite}
                />
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: '80%' }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good) => (
                    <li key={good} className="property__inside-item">
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {host.isPro &&
                  <span className="property__user-status">
                   Pro
                  </span>}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ul className="reviews__list">
                  <ReviewsList reviews={reviews} />
                </ul>
                <CommentsForm
                  id={currentPointOffer.id}
                />
              </section>
            </div>
          </div>
          <Map
            city={currentPointOffer.city}
            points={[...nearbyOffers, currentPointOffer]}
            className='property__map'
            selectedPoint={currentPointOffer.id}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList
                className='near-places'
                offers={nearbyOffers}
              />
            </div>
          </section>
        </div>
      </main>
    </section>
  );
}
