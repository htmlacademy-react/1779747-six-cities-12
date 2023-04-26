import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { ErrorData } from '../../types/state';
import {NameSpace} from '../../const';


export const initialState: ErrorData = {
  error: null,
};

export const errorData = createSlice({
  name: NameSpace.Error,
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {setError} = errorData.actions;
