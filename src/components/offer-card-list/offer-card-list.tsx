import { nanoid } from '@reduxjs/toolkit';
import OfferCard from '../offer-card/offer-card';
import { OfferCardType } from '../../types/offer';

type OfferCardListProps = {
  offers: OfferCardType[];
}

function OfferCardList({ offers }: OfferCardListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          classname='cities'
          offerCard={offer}
          key={nanoid(10)}
        />
      ))}
    </div>
  );
}

export default OfferCardList;
