import {Helmet} from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import Logo from '../../components/logo/logo';
import User from '../../components/user/user';
import FavoritesCard from '../../components/favorites-card/favorites-card';
import { getFavorites } from '../../store/favorites-data/favorites-data-selectors';
import Footer from '../../components/footer/footer';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';


export default function FavoritesScreen(): JSX.Element {
  const favoriteOffers = useAppSelector(getFavorites);

  const favoriteSortList = favoriteOffers.filter((offer) => offer.isFavorite);
  const citiesSortLIst = Array.from(new Set(favoriteSortList.map((i) => i.city.name)));

  return (

    <>
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

      { (!favoriteOffers.length)
        ? <FavoritesEmpty />
        :
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">

                {citiesSortLIst.map((city) => (
                  <li className="favorites__locations-items" key={city}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="/">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {favoriteSortList.filter((offer) => offer.city.name === city).map((offer) => <FavoritesCard key={offer.id} offer={offer}/>)}
                    </div>
                  </li>
                ))};
              </ul>
            </section>
          </div>
        </main>}
      <Footer />
    </>
  );
}
