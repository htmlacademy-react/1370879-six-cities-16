import { nanoid } from '@reduxjs/toolkit';
import { MainProps } from '../../pages/main-page/main';
import OfferCard from '../offer-card/offer-card';

function OfferCardList({ offers }: MainProps) {
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
          rating={0}
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