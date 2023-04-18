import {Helmet} from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import User from '../../components/user/user';
import Footer from '../../components/footer/footer';
import { resetMainCity } from '../../store/action';
import { useAppDispatch } from '../../hooks';


export default function NotFoundScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  dispatch(resetMainCity());

  return (
    <section className="not-found-screen">
      <Helmet>
        <title>6 cities. Страница не найдена</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <User />
          </div>
        </div>
      </header>
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">404. Page not found.</b>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </section>
  );
}
