import { createReducer } from '@reduxjs/toolkit';
import { choiceCity, resetMainCity} from './action';
import { OFFERS_COUNT, CITIES } from '../const';
import { offers } from '../mocks/offers';
import { reviews } from '../mocks/reviews';
import { nearbyOffers } from '../mocks/nearbyOffers';
import { Offer } from '../types/offers';
import { Reviews } from '../types/reviews';


type InitialState = {
    city: string;
    offers: Offer[];
    offersCount: number;
    reviews: Reviews[];
    nearbyOffers: Offer[];
  };

const initialState: InitialState = {
  city: CITIES[0],
  offers: offers,
  offersCount: OFFERS_COUNT,
  reviews: reviews,
  nearbyOffers: nearbyOffers,

};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(choiceCity, (state, {payload}) => {
      state.city = payload;
    })
    .addCase(resetMainCity, (state) => {
      state.city = CITIES[0];
    });
});
