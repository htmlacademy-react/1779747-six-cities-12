import { useAppDispatch, useAppSelector } from '../../hooks';
import cn from 'classnames';
import { useState } from 'react';
import { changeSortType } from '../../store/main-data/main-data';
import { SORT_TYPES } from '../../const';
import { getSortType } from '../../store/main-data/main-data-selectors';

export default function Sort () {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const sortTypeValue = useAppSelector(getSortType);
  const onChangeSortType = (sortType: string) => {
    dispatch(changeSortType(sortType));
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
      >
        {sortTypeValue}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={cn('places__options places__options--custom', {'places__options--opened': isOpen})}>
        {SORT_TYPES.map((sortType) => (
          <li
            key={sortType}
            className={cn('places__option places__option', {'places__option--active': sortType === sortTypeValue})}
            tabIndex={0}
            onClick={(event) => {
              onChangeSortType(sortType);
              setIsOpen(false);
            }}
          >
            {sortType}
          </li>
        ))}
      </ul>
    </form>
  );

}
