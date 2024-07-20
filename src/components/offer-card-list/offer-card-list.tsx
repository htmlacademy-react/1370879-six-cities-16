import { nanoid } from '@reduxjs/toolkit';
import { MainProps } from '../../pages/main-page/main';
import OfferCard from '../offer-card/offer-card';

function OfferCardList({ offers }: MainProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          isFavorite={offer.isFavorite}
          name={offer.title}
          isPremium={offer.isPremium}
          src={offer.previewImage}
          price={offer.price}
          type={offer.type}
          key={nanoid(10)}
        />
      ))}
    </div>
  );
}

export default OfferCardList;
