import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Offer } from '../../types/offers';
import BookmarkButton from '../bookmark-button/bookmark-button';

type FavoritesCardProps = {
offer: Offer;
}

export default function FavoritesCard({offer}: FavoritesCardProps): JSX.Element {

  const {isPremium, isFavorite ,id, images, title, price, rating, type } = offer;
  return (
    <article className="favorites__card place-card">
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div> }
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link key={id} to={AppRoute.Room.replace(':id', `${id}`)}>
          <img className="place-card__image" src={images[0]} width="150" height="110" alt={title} />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton
            className={'place-card'}
            id={id}
            isFavorite={isFavorite}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link key={id} to={AppRoute.Room.replace(':id', `${id}`)}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
