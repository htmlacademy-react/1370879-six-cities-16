import { nanoid } from '@reduxjs/toolkit';

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

export const OFFER_GALLERIES_PICTURES = [
  { id: nanoid(10), path: 'img/room.jpg', alt: 'Photo studio'},
  { id: nanoid(10), path: 'img/apartment-01.jpg', alt: 'Photo studio'},
  { id: nanoid(10), path: 'img/apartment-02.jpg', alt: 'Photo studio'},
  { id: nanoid(10), path: 'img/apartment-03.jpg', alt: 'Photo studio'},
  { id: nanoid(10), path: 'img/studio-01.jpg', alt: 'Photo studio'},
  { id: nanoid(10), path: 'img/apartment-01.jpg', alt: 'Photo studio'},
];

export const placesCount: number = 312;

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'Auth',
  NoAuth = 'NoAuth',
  Unknown = 'Unknown'
}
