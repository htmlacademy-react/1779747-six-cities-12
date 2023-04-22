import {Helmet} from 'react-helmet-async';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useState } from 'react';
import { choiceCity, updateOffers } from '../../store/action';
import Logo from '../../components/logo/logo';
import User from '../../components/user/user';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import CitiesList from '../../components/cities-list/cities-list';
import MainEmpty from '../../components/main-empty/main-empty';
import Sort from '../../components/sort/sort';


export default function MainScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const onCityChange = (city: string) => {
    dispatch(choiceCity(city));
    dispatch(updateOffers());
  };
  const activeCityOffers = offers.filter((offer) => offer.city.name === activeCity);
  const [activeCard, setActiveCard] = useState<number | null>(null);

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
          onCityChange={onCityChange}
        />
        <div className="cities">
          <div className={cn('cities__places-container container', {'cities__places-container--empty': (!activeCityOffers.length)})}>
            {(!activeCityOffers.length) ?
              <MainEmpty city={activeCity}/>
              : (
                <>
                  <section className="cities__places places">
                    <h2 className="visually-hidden">Places</h2>
                    <b className="places__found">{activeCityOffers.length} places to stay in {activeCity}</b>
                    <Sort />
                    <div className="cities__places-list places__list tabs__content">
                      <OffersList
                        className='cities'
                        onMouseCardOver={setActiveCard}
                      />
                    </div>
                  </section>
                  <div className="cities__right-section">
                    <Map
                      city={activeCityOffers[0].city}
                      points={activeCityOffers}
                      className='cities__map'
                      selectedPoint={activeCard}
                    />
                  </div>
                </>
              )}
          </div>
        </div>
      </main>
    </div>
  );
}

