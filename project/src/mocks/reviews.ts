import { Reviews } from '../types/reviews';

const AVATAR_URL = 'https://i.pravatar.cc/128';

export const reviews: Reviews[] = [

  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Sat Apr 08 2023 11:56:45 GMT+0300 (Москва, стандартное время)',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 1,
      isPro: false,
      name: 'Oliver.conner'
    }},


];


