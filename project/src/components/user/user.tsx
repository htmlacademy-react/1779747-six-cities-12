import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import { logoutAction } from '../../store/api-action';
import {AppRoute, AuthorizationStatus} from '../../const';
import { getAuthorizationStatus, getUserData } from '../../store/user-process/user-process-selectors';
import { getFavorites } from '../../store/favorites-data/favorites-data-selectors';


export default function User(): JSX.Element {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(getUserData);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favoritesData = useAppSelector(getFavorites);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {(userData && authorizationStatus === AuthorizationStatus.Auth) ?
          <>
            <li className="header__nav-item user">
              <Link className="header__nav-link header__nav-link--profile" to= {AppRoute.Favorites}>
                <div
                  className="header__avatar-wrapper user__avatar-wrapper"
                  style= {{backgroundImage: `url(${userData.avatarUrl})`}}
                >
                </div>
                <span className="header__user-name user__name">{userData.email}</span>
                <span className="header__favorite-count">{favoritesData.length}</span>
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                className="header__nav-link"
                onClick={(evt) => {
                  dispatch(logoutAction());
                }}
                to = {AppRoute.Login}
              >
                <span className="header__signout">Sign out</span>
              </Link>
            </li>
          </>
          :
          <Link
            className="header__nav-link header__nav-link--profile"
            to={AppRoute.Login}
          >
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__login">Sign in</span>
          </Link>}

      </ul>
    </nav>
  );
}
