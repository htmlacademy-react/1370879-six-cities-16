import { nanoid } from '@reduxjs/toolkit';

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

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '*',
  Root = 'Root'
}

export enum AuthorizationStatus {
  Auth = 'Auth',
  NoAuth = 'NoAuth',
  Unknown = 'Unknown'
}
