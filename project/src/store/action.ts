import { createAction } from '@reduxjs/toolkit';

export const choiceCity = createAction(
  'main/choiceCity',
  (city: string) => ({ payload: city })
);

export const changeSortType = createAction(
  'main/changeSortType',
  (sortType: string) => ({ payload: sortType })
);

