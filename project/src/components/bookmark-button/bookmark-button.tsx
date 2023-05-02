import { useAppDispatch, useAppSelector } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { addFavoritesOffer } from '../../store/api-action';
import cn from 'classnames';
import { AppRoute } from '../../const';
import { getAuthCheckedStatus } from '../../store/user-process/user-process-selectors';


type BookmarkButtonProps = {
     className: string;
     id: number;
     isFavorite: boolean;
  }


export default function BookmarkButton({className, id, isFavorite}: BookmarkButtonProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthCheckedStatus);
  const bookmarkClickHandle = () => {
    if (authorizationStatus) {
      dispatch(addFavoritesOffer({
        hotelId: id,
        status: Number(!isFavorite),
      }));
    } else {
      navigate(AppRoute.Login);
    }
  };


  return (
    <button
      className={cn(`${className}__bookmark-button button`, isFavorite && `${className}__bookmark-button--active`)}
      type="button"
      onClick={bookmarkClickHandle}
    >
      <svg
        className={`${className}__bookmark-icon`}
        width={(className === 'place-card') ? '18' : '31'}
        height={(className === 'place-card') ? '19' : '33'}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">
        {isFavorite ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
}

