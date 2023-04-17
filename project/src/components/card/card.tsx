import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Offer } from '../../types/offers';

type CardProps = {
offer: Offer;
className: string;
onMouseOver: (activeCard: number) => void;
}

export default function Card({offer, className, onMouseOver}: CardProps): JSX.Element {

  const {isPremium, id, images, title, price, rating, type } = offer;
  return (
    <article
      className={`${className}__card place-card`}
      onMouseOver={() => onMouseOver(id)}
    >
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div> }
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link key={id} to={AppRoute.Room.replace(':id', `${id}`)}>
          <img className="place-card__image" src={images[0]} width="260" height="200" alt={title} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${Math.round(rating) * 20}%` }}></span>
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
