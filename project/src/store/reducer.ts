import { createReducer } from '@reduxjs/toolkit';
import { choiceCity, resetMainCity} from './action';
import { CITIES } from '../const';
import { offers } from '../mocks/offers';
import { Offer } from '../types/offers';


type InitialState = {
    city: string;
    offers: Offer[];
  };

const initialState: InitialState = {
  city: CITIES[0],
  offers: offers.filter((offer) => offer.city.name === CITIES[0]),
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
