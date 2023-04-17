import {Helmet} from 'react-helmet-async';
import { Navigate} from 'react-router-dom';
import Logo from '../../components/logo/logo';
import User from '../../components/user/user';
import { Offer } from '../../types/offers';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import CitiesList from '../../components/cities-list/cities-list';
import { choiceCity } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks';


type MainScreenProps = {
    offersCount: number;
    offers: Offer[];
  }


export default function MainScreen({offersCount, offers}: MainScreenProps): JSX.Element {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector((state) => state.city);
  const onCity = (city: string) => {
    dispatch(choiceCity(city));
  };
  const activeCityOffers = offers.filter((offer) => offer.city.name === activeCity);

  if (activeCityOffers.length < 1) {
    return <Navigate to="page-not-found"/>;
  }


  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities. Ничто так не развивает ум, как путешествие</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <User />
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList
          activeCity={activeCity}
          onCity={onCity}
        />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{activeCityOffers.length} places to stay in {activeCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <OffersList
                  offersList={activeCityOffers}
                  offersCount={offersCount}
                  className='cities'
                />
              </div>
            </section>
            <div className="cities__right-section">
              <Map
                city={activeCityOffers[0].city}
                points={activeCityOffers}
                className='cities__map'
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

