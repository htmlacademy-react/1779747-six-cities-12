import { createReducer } from '@reduxjs/toolkit';
import { changeSortType, choiceCity } from './action';
import { CITIES } from '../const';
import { offers } from '../mocks/offers';
import { reviews } from '../mocks/reviews';
import { nearbyOffers } from '../mocks/nearbyOffers';
import { Offer } from '../types/offers';
import { Reviews } from '../types/reviews';
import { SORT_TYPE } from '../const';


type InitialState = {
    city: string;
    offers: Offer[];
    reviews: Reviews[];
    nearbyOffers: Offer[];
    sortType: string;
  };

const initialState: InitialState = {
  city: CITIES[0],
  offers: offers,
  reviews: reviews,
  nearbyOffers: nearbyOffers,
  sortType: SORT_TYPE[0]
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(choiceCity, (state, {payload}) => {
      state.city = payload;
    })
    .addCase(changeSortType, (state, {payload}) => {
      state.sortType = payload;
    });
});
