import { CITIES } from '../../const';
import { Link } from 'react-router-dom';
import cn from 'classnames';

type CitiesListProps = {
    activeCity: string;
    onCity: (city: string) => void;
  }

export default function CitiesList({activeCity, onCity}: CitiesListProps){
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <li
              key={city}
              className="locations__item"
              onClick={(event) => {
                event.preventDefault();
                onCity(city);
              }}
            >
              <Link className={cn('locations__item-link tabs__item', {'tabs__item--active': city === activeCity })}
                to="/#"
              >
                <span>{city}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
