import { OfferCardType } from '../types/offer';

export const getMarkUpRanking = (ranking: number) => {
  const rankingInPercent = `${(Math.floor(ranking) / 5) * 100}%`;
  return {width: rankingInPercent};
};

export const makeFirstLetterUppercase = (string: string) => `${string[0].toUpperCase()}${string.slice(1)}`;

export const getFavoritesOfferCards = (offers: OfferCardType[]) => offers.filter((offer) => offer.isFavorite);

// export const getOfferCardsByCity = (offerCards: OfferTemplateType[]) => {
//   const cardsByCity = {};

//   for (const card of offerCards) {
//     if (!cardsByCity[card.city.name]) {
//       cardsByCity[card.city.name] = [];
//     }

//     cardsByCity[card.city.name].push(card);
//   }

//   return cardsByCity;
// };
