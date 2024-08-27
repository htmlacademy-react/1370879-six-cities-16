import OfferCard from '../offer-card/offer-card';
import { OfferCardType } from '../../types/offer';

type OfferCardListProps = {
  offers: OfferCardType[];
  onHover?: (offer?: OfferCardType) => void;
}

function OfferCardList({ offers, onHover }: OfferCardListProps) {
  const onMouseEnterHandler = (offer: OfferCardType) => {
    if (onHover) {
      onHover(offer);
    }
  };

  const onMouseLeaveHandler = (): void => {
    if (onHover) {
      onHover();
    }
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          onMouseOver={() => onMouseEnterHandler(offer)}
          onMouseLeave={() => onMouseLeaveHandler()}
          classname='cities'
          offerCard={offer}
          key={offer.id}
        />
      ))}
    </div>
  );
}

export default OfferCardList;
