import { Offer } from '../types/offers';

export const getMarkUpRanking = (ranking: number) => {
  const rankingInPercent = `${(Math.floor(ranking) / 5) * 100}%`;
  return {width: rankingInPercent};
};

export const upFirstLetter = (string: string) => `${string[0].toUpperCase()}${string.slice(1)}`;

export const getFavoritesOfferCards = (offers: Offer[]) => offers.filter((offer) => offer.isFavorite);
