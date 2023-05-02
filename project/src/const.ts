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

export enum SendStatus {
    NoLooding = 'NO_LOODING',
    Looding = 'LOODING',
    Error = 'ERROR'
  }

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

export const SORT_TYPES = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first'
];

export enum APIRoute {
  Offers = '/hotels',
  Favorite = '/favorite',
  Reviews = '/comments',
  Login = '/login',
  Logout = '/logout'
}
export enum NameSpace {
  User = 'USER',
  Offers = 'OFFERS',
  Main = 'MAIN',
  Error = 'ERROR',
  Room = 'ROOM',
  Favorites = 'FAVORITES'
}

export const STAR_RATINGS = [
  { value: 5, title: 'perfect' },
  { value: 4, title: 'good' },
  { value: 3, title: 'not bad' },
  { value: 2, title: 'badly' },
  { value: 1, title: 'terribly' },
];

export const COMMENT_LETTERS = {
  min: 50,
  max: 300,
};


