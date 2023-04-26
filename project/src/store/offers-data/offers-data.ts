import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { OffersData } from '../../types/state';
import {NameSpace} from '../../const';
import { Offer } from '../../types/offers';
import { fetchOfferAction } from '../api-action';


export const initialState: OffersData = {
  offers: [],
  isOffersDataLoading: false,

};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    loadOffers: (state, action: PayloadAction<Offer[]>) => {
      state.offers = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isOffersDataLoading = false;
      });
  }
});

export const {loadOffers} = offersData.actions;
