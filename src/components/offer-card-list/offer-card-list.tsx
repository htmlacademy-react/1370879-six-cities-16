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
          id={offer.id}
          title={offer.title}
          type={offer.type}
          price={offer.price}
          previewImage={offer.previewImage}
          isFavorite={offer.isFavorite}
          isPremium={offer.isPremium}
          rating={offer.rating}
          city={{
            name: '',
            location: {
              latitude: 0,
              longitude: 0,
              zoom: 0
            }
          }}
          location={{
            latitude: 0,
            longitude: 0,
            zoom: 0
          }}
        />
      ))}
    </div>
  );
}

export default OfferCardList;
