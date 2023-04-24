import { createReducer } from '@reduxjs/toolkit';
import { changeSortType, choiceCity, loadOffers, requireAuthorization,
  setError, setOffersDataLoadingStatus, setUserData } from './action';
import { CITIES, AuthorizationStatus } from '../const';
import { reviews } from '../mocks/reviews';
import { nearbyOffers } from '../mocks/nearbyOffers';
import { Offer } from '../types/offers';
import { UserData } from '../types/user-data';
import { Reviews } from '../types/reviews';
import { SORT_TYPE } from '../const';


type InitialState = {
    city: string;
    offers: Offer[];
    reviews: Reviews[];
    nearbyOffers: Offer[];
    sortType: string;
    authorizationStatus: AuthorizationStatus;
    isOffersDataLoading: boolean;
    error: string | null;
    userData: UserData | null;

  };

const initialState: InitialState = {
  city: CITIES[0],
  offers: [],
  reviews: reviews,
  nearbyOffers: nearbyOffers,
  sortType: SORT_TYPE[0],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  error: null,
  userData: null
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(choiceCity, (state, {payload}) => {
      state.city = payload;
    })
    .addCase(changeSortType, (state, {payload}) => {
      state.sortType = payload;
    })
    // .addCase(updateOffers, (state) => {
    //   state.offers = offers.filter((offer)=> offer.city.name === state.city);
    // })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    });

});
