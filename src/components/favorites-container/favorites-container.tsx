import OfferCard from '../../components/offer-card/offer-card';
import { OfferCardType } from '../../types/offer';
import { getOfferCardsByCity } from '../../utils';

type FavoritesContainerProps = {
  favoriteOfferCards: OfferCardType[];
}

function FavoritesContainer({ favoriteOfferCards }: FavoritesContainerProps) {
  const offerCardsByCity = getOfferCardsByCity(favoriteOfferCards);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.entries(offerCardsByCity).map(([cityName, offerCards]) => (
          <li key={cityName} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{cityName}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {offerCards.map((offer) => (
                <OfferCard
                  classname={'favorites'}
                  offerCard={offer}
                  key={offer.id}
                />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FavoritesContainer;
