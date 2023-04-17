import { Offer } from '../types/offers';

const AVATAR_URL = 'https://i.pravatar.cc/128';

export const offers: Offer[] = [
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 11,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: false,
      name: 'Angelina'
    },
    id: 1,
    images: [
      '/img/apartment-01.jpg'
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.3909553943508 ,
      longitude: 4.85309666406198,

      zoom: 8
    },
    'maxAdults': 4,
    previewImage: '/img/apartment-02.jpg',
    price: 120,
    rating: 4.2,
    title: 'Beautiful & luxurious studio at great location.',
    type: 'apartment'
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 11,
      },
      name: 'Amsterdam',
    },
    description: 'Paris is a unique place where you can have an exciting time without doing anything specia.',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 2,
      isPro: true,
      name: 'Max'
    },
    id: 2,
    images: [
      '/img/apartment-02.jpg'
    ],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    'maxAdults': 4,
    previewImage: '/img/apartment-02.jpg',
    price: 115,
    rating: 4.5,
    title: 'Beautiful & luxurious studio at great location',
    type: 'hotel'
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 11,
      },
      name: 'Amsterdam',
    },
    description: 'As an ancient and large city, Cologne has many historical sights.',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: true,
      name: 'Isabella'
    },
    id: 3,
    images: [
      '/img/apartment-03.jpg'
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    'maxAdults': 4,
    previewImage: '../../public/img/apartment-03.jpg',
    price: 130,
    rating: 4.9,
    title: 'Beautiful & luxurious studio at great location',
    type: 'house'
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'Brussels is a city of chocolate shops and antique shops',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 4,
      isPro: true,
      name: 'Jon'
    },
    id: 4,
    images: [
      '/img/apartment-01.jpg'
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: '../../public/img/apartment-01.jpg',
    price: 100,
    rating: 4.4,
    title: 'Beautiful & luxurious studio at great location',
    type: 'room'
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 48.877816,
        longitude: 2.332212,
        zoom: 11,
      },
      name: 'Paris',
    },
    description: 'Life stops in Paris. Here no one is in a hurry and enjoys every moment',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 5,
      isPro: true,
      name: 'Jon'
    },
    id: 5,
    images: [
      '/img/apartment-01.jpg'
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 48.87,
      longitude: 2.32,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: '../../public/img/apartment-01.jpg',
    price: 100,
    rating: 4.4,
    title: 'Life stops in Paris. Here no one is in a hurry and enjoys every moment',
    type: 'room'
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 48.887816,
        longitude: 2.322212,
        zoom: 11,
      },
      name: 'Paris',
    },
    description: 'Life stops in Paris. Here no one is in a hurry and enjoys every moment',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 6,
      isPro: true,
      name: 'Sara'
    },
    id: 6,
    images: [
      '/img/apartment-01.jpg'
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 48.85,
      longitude: 2.34,
      zoom: 8
    },
    maxAdults: 6,
    previewImage: '../../public/img/apartment-01.jpg',
    price: 100,
    rating: 4.8,
    title: 'Life stops in Paris. Here no one is in a hurry and enjoys every moment',
    type: 'room'
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 50.5632,
        longitude: 6.5728,
        zoom: 11,
      },
      name: 'Cologne',
    },
    description: 'Life stops in Paris. Here no one is in a hurry and enjoys every moment',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 7,
      isPro: true,
      name: 'Sara'
    },
    id: 7,
    images: [
      '/img/apartment-01.jpg'
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 50.5532,
      longitude: 6.58,
      zoom: 8
    },
    maxAdults: 6,
    previewImage: '../../public/img/apartment-01.jpg',
    price: 100,
    rating: 4.8,
    title: 'Life stops in Paris. Here no one is in a hurry and enjoys every moment',
    type: 'room'
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 50.5048,
        longitude: 4.2109,
        zoom: 12,
      },
      name: 'Brussels',
    },
    description: 'Life stops in Paris. Here no one is in a hurry and enjoys every moment',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 8,
      isPro: true,
      name: 'Sara'
    },
    id: 8,
    images: [
      '/img/apartment-01.jpg'
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 50.5049,
      longitude: 4.22,
      zoom: 8
    },
    maxAdults: 6,
    previewImage: '../../public/img/apartment-01.jpg',
    price: 100,
    rating: 4.8,
    title: 'Life stops in Paris. Here no one is in a hurry and enjoys every moment',
    type: 'room'
  }
];

