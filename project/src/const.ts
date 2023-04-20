export const OFFERS_COUNT = 4;

export enum AppRoute {
    Main = '/',
    Login = '/login',
    Favorites = '/favorites',
    Room = '/offer/:id',
  }

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
  }

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

export const SORT_TYPE = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first'
];


