import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { Offer } from '../types/offers';
import { Reviews, ReviewData } from '../types/reviews.js';
import { saveToken, dropToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { FavoriteData } from '../types/favorite-data.js';
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
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(redirectToRoute(AppRoute.Main));
      return data;
    },
  );

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/logout',
    async (_arg, {extra: api}) => {
      await api.delete(APIRoute.Logout);
      dropToken();
    },
  );

export const sendOfferInRoomIdAction = createAsyncThunk<Offer, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'room/sendOfferInRoomId',
  async (id, {dispatch, extra: api}) => {
    const { data } = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
    dispatch(fetchNearbyOffersAction(id));
    dispatch(fetchReviewsAction(id));
    return data;
  });

export const fetchNearbyOffersAction = createAsyncThunk<Offer[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'room/loadNearbyOffers',
  async (id, {extra: api}) => {
    const {data} = await api.get<Offer[]>( `${APIRoute.Offers}/${id}/nearby`);
    return data;
  });

export const fetchReviewsAction = createAsyncThunk<Reviews[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'room/loadReviews',
  async (id, {extra: api}) => {
    const {data} = await api.get<Reviews[]>(`${APIRoute.Reviews}/${id}`);
    return data;
  });

export const sendReviewAction = createAsyncThunk<Reviews[], ReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'room/sendReviews',
  async ({hotelId, rating, comment}, {extra: api}) => {
    const {data} = await api.post<Reviews[]>((`${APIRoute.Reviews}/${hotelId}`), {rating, comment});
    return data;
  },
);

export const fetchFavoritesAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favorites/fetchFavorites',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Favorite);
    return data;
  },
);

export const addFavoritesOffer = createAsyncThunk<Offer, FavoriteData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favorites/addFavoritesOffer',
  async ({hotelId, status}, {extra: api}) => {
    const {data} = await api.post<Offer>(`${APIRoute.Favorite}/${hotelId}/${status}`);
    return data;
  },
);
