import {combineReducers} from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userProcess } from './user-process/user-process';
import { offersData } from './offers-data/offers-data';
import { mainData } from './main-data/main-data';
import { errorData } from './error-data/error-data';
import { roomData } from './room-data/room-data';
import { favoritesData } from './favorites-data/favorites-data';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.Main]: mainData.reducer,
  [NameSpace.Error]: errorData.reducer,
  [NameSpace.Room]: roomData.reducer,
  [NameSpace.Favorites]: favoritesData.reducer
});
