import {createSlice} from '@reduxjs/toolkit';
import { RoomData } from '../../types/state';
import {NameSpace} from '../../const';
import { reviews } from '../../mocks/reviews';
import { nearbyOffers } from '../../mocks/nearbyOffers';

export const initialState: RoomData = {
  reviews: reviews,
  nearbyOffers: nearbyOffers,
};

export const roomData = createSlice({
  name: NameSpace.Main,
  initialState,
  reducers: {
  }
});

