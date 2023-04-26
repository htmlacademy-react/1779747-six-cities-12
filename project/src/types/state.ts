import { store } from '../store/index';
import { AuthorizationStatus } from '../const';
import { UserData } from './user-data';
import { Offer } from '../types/offers';
import { Reviews } from '../types/reviews';


export type MainData = {
    city: string;
    sortType: string;
  };

export type UserProcess = {
    authorizationStatus: AuthorizationStatus;
    userData: UserData | null;
  };

export type OffersData = {
    offers: Offer[];
    isOffersDataLoading: boolean;
  };

export type ErrorData = {
    error: string | null;
 }

export type RoomData = {
  reviews: Reviews[];
    nearbyOffers: Offer[];
 }

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

