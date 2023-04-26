import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { Offer } from '../types/offers';
import { saveToken, dropToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { redirectToRoute } from './action';
import {APIRoute, AppRoute} from '../const';


export const fetchOfferAction = createAsyncThunk<Offer[], undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'data/fetchOffers',
    async (_arg, {extra: api}) => {
      const {data} = await api.get<Offer[]>(APIRoute.Offers);
      return data;
    },
  );

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/checkAuth',
    async (_arg, {extra: api}) => {
      const {data} = await api.get<UserData>(APIRoute.Login);
      return data;
    },
  );

export const loginAction = createAsyncThunk<UserData | null, AuthData, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/login',
    async ({login: email, password}, {dispatch, extra: api}) => {
      try {
        const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
        saveToken(data.token);
        dispatch(redirectToRoute(AppRoute.Main));
        return data;
      } catch (err) {
        throw new Error();
      }
    },
  );

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/logout',
    async (_arg, {extra: api}) => {
      try {
        await api.delete(APIRoute.Logout);
        dropToken();
      } catch (err) {
        throw new Error();
      }
    },
  );
