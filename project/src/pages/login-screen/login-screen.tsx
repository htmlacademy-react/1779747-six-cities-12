import {Helmet} from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {AppRoute} from '../../const';
import Logo from '../../components/logo/logo';
import LoginForm from '../../components/login-form/login-form';


export default function LoginScreen(): JSX.Element{

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities. Путешествовать – значит жить</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <LoginForm/>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Main}>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
