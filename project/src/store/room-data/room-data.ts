import {createSlice} from '@reduxjs/toolkit';
import { RoomData } from '../../types/state';
import {NameSpace, SendStatus} from '../../const';
import { fetchNearbyOffersAction, sendOfferInRoomIdAction, fetchReviewsAction, sendReviewAction} from '../api-action';


export const initialState: RoomData = {
  sendStatus: SendStatus.NoLooding,
  offerInRoom: null,
  reviews:[],
  nearbyOffers: [],
};


export const roomData = createSlice({
  name: NameSpace.Room,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(sendOfferInRoomIdAction.fulfilled,(state, action) => {
        state.offerInRoom = action.payload;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(sendReviewAction.pending, (state) => {
        state.sendStatus = SendStatus.Looding;
      })
      .addCase(sendReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.sendStatus = SendStatus.NoLooding;
      })
      .addCase(sendReviewAction.rejected, (state) => {
        state.sendStatus = SendStatus.Error;
      });

  }
});

