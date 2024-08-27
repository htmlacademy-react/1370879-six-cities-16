import { nanoid } from '@reduxjs/toolkit';
import { City } from './types/offer';

export const URL_MARKER_DEFAULT = 'markup/img/pin.svg';
export const URL_MARKER_CURRENT = 'markup/img/pin-active.svg';
export const TILE_LAYER_URL_PATTERN = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
export const TILE_LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
// enum Direction {
//   Left = 'left',
//   Right = 'right',
//   Top = 'top',
//   Bottom = 'bottom'
// }

// console.log(Direction.Bottom);
// console.log([] / 1);

export const CITIES = [
  { id: nanoid(10), name: 'Paris', slug: '/paris'},
  { id: nanoid(10), name: 'Cologne', slug: '/cologne' },
  { id: nanoid(10), name: 'Brussels', slug: '/brussels'},
  { id: nanoid(10), name: 'Amsterdam', slug: '/amsterdam'},
  { id: nanoid(10), name: 'Hamburg', slug: '/hamburg'},
  { id: nanoid(10), name: 'Dusseldorf', slug: '/dusseldorf'},
] as const;

export const OFFER_GALLERIES_PICTURES = [
  { id: nanoid(10), path: 'img/room.jpg', alt: 'Photo studio'},
  { id: nanoid(10), path: 'img/apartment-01.jpg', alt: 'Photo studio'},
  { id: nanoid(10), path: 'img/apartment-02.jpg', alt: 'Photo studio'},
  { id: nanoid(10), path: 'img/apartment-03.jpg', alt: 'Photo studio'},
  { id: nanoid(10), path: 'img/studio-01.jpg', alt: 'Photo studio'},
  { id: nanoid(10), path: 'img/apartment-01.jpg', alt: 'Photo studio'},
];

export const CITY_LOCATIONS: City[] = [
  {
    id: 'paris',
    location: { latitude: 48.85661, longitude: 2.351499, zoom: 13 },
    name: 'Paris',
  },
  {
    id: 'cologne',
    location: { latitude: 50.938361, longitude: 6.959974, zoom: 13 },
    name: 'Cologne',
  },
  {
    id: 'brussels',
    location: { latitude: 50.846557, longitude: 4.351697, zoom: 13 },
    name: 'Brussels',
  },
  {
    id: 'amsterdam',
    location: { latitude: 52.37454, longitude: 4.897976, zoom: 13 },
    name: 'Amsterdam',
  },
  {
    id: 'hamburg',
    location: { latitude: 53.550341, longitude: 10.000654, zoom: 13 },
    name: 'Hamburg',
  },
  {
    id: 'dusseldorf',
    location: { latitude: 51.225402, longitude: 6.776314, zoom: 13 },
    name: 'Dusseldorf',
  },
];

// export enum AppRoute {
//   Main = '/',
//   Login = '/login',
//   Favorites = '/favorites',
//   Offer = '/offer/:id',
//   NotFound = '*',
//   Root = 'Root'
// }

export const AppRoute = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id',
  NotFound: '*',
  Root: 'Root'
} as const;

export enum AuthorizationStatus {
  Auth = 'Auth',
  NoAuth = 'NoAuth',
  Unknown = 'Unknown'
}
