import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { MainData } from '../../types/state';
import {NameSpace, CITIES, SORT_TYPE} from '../../const';


export const initialState: MainData = {
  city: CITIES[0],
  sortType: SORT_TYPE[0],
};

export const mainData = createSlice({
  name: NameSpace.Main,
  initialState,
  reducers: {
    choiceCity: (state, {payload}: PayloadAction<string>) => {
      state.city = payload;
    },
    changeSortType: (state, {payload}: PayloadAction<string>) => {
      state.sortType = payload;
    },
  },
});

export const {choiceCity, changeSortType} = mainData.actions;
