import { OfferCardType } from '../types/offer';
import { offers } from '../mocks/offers/offers';
import { offersPage } from '../mocks/offers/offer';

type OffersByCityType = {
  [key: string]: OfferCardType[];
}

export const getMarkUpRanking = (ranking: number) => {
  const rankingInPercent = `${(Math.floor(ranking) / 5) * 100}%`;
  return {width: rankingInPercent};
};

export const makeFirstLetterUppercase = (string: string) => `${string[0].toUpperCase()}${string.slice(1)}`;

export const getCurrentOffer = (offerId: string | undefined) => offersPage.find((offer) => offer.id === offerId);

export const getFavoritesOfferCards = () => offers.filter((offer) => offer.isFavorite);

export const getOfferCardsByCity = (offerCards: OfferCardType[]) => {
  const cardsByCity: OffersByCityType = {};

  for (const card of offerCards) {
    if (!cardsByCity[card.city.name]) {
      cardsByCity[card.city.name] = [];
    }

    cardsByCity[card.city.name].push(card);
  }

  return cardsByCity;
};

export const getBedroomsString = (count: number) => `${count} Bedroom${count > 1 ? 's' : ''}`;
export const getAdultsString = (count: number) => `Max ${count} adult${count > 1 ? 's' : ''}`;

// const current = getCurrentOffer('6af6f711-c28d-4121-82cd-e0b462a27f00');

// console.log(current);
