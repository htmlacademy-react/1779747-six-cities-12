import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offers';
import { UserData } from '../types/user-data';
import { AuthorizationStatus } from '../const';

export const choiceCity = createAction(
  'main/choiceCity',
  (city: string) => ({ payload: city })
);

export const changeSortType = createAction(
  'main/changeSortType',
  (sortType: string) => ({ payload: sortType })
);
export const updateOffers = createAction('offers/updateOffers');

export const loadOffers = createAction<Offer[]>('data/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('data/setError');

export const setUserData = createAction('user/loadUserData',(userData: UserData) => ({payload: userData}));
