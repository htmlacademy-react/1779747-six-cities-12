import { createAction } from '@reduxjs/toolkit';

export const choiceCity = createAction(
  'main/choiceCity',
  (city: string) => ({ payload: city })
);

export const resetMainCity = createAction(
  'main/resetMainCity');
