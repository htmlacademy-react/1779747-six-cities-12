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
  {
    comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters of Amsterdam.',
    date: 'Mon Feb 10 2022 12:43:43 GMT+0300 (Москва, стандартное время)',
    id: 2,
    rating: 3.5,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 2,
      isPro: true,
      name: 'Marry'
    }},
  {
    comment: 'There are many variations of passages of Lorem Ipsum available of Amsterdam.',
    date: 'Fri Sep 15 2021 22:10:10 GMT+0300 (Москва, стандартное время)',
    id: 3,
    rating: 4.8,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: false,
      name: 'Jon Don'
    }},
  {
    comment: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old of Amsterdam.',
    date: 'Thu Jun 15 2023 15:30:30 GMT+0300 (Москва, стандартное время)',
    id: 4,
    rating: 3.9,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 4,
      isPro: true,
      name: 'Clara'
    }},
];


