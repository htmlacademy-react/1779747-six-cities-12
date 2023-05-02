import {createSlice} from '@reduxjs/toolkit';
import { FavoritesData } from '../../types/state';
import {NameSpace} from '../../const';
import { fetchFavoritesAction, addFavoritesOffer, logoutAction} from '../api-action';


export const initialState: FavoritesData = {
  favorites: [],
};

export const favoritesData = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
      })
      .addCase(addFavoritesOffer.fulfilled, (state, action) => {
        if (action.payload.isFavorite) {
          state.favorites.push(action.payload);
        } else {
          state.favorites = state.favorites.filter((offer) => offer.id !== action.payload.id);
        }
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.favorites = [];
      });
  },
});
