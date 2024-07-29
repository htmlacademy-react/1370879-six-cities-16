import OfferCard from '../../components/offer-card/offer-card';
import { Offer } from '../../types/offers';

type FavoritesContainerProps = {
  favoriteOfferCards: Offer[];
}

function FavoritesContainer({ favoriteOfferCards }: FavoritesContainerProps) {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {favoriteOfferCards.map((offer) => (
              <OfferCard
                classname={'favorites'}
                offerCard={offer}
                isFavorite={offer.isFavorite}
                isPremium={offer.isPremium}
                price={offer.price}
                type={offer.type}
                key={offer.id}
                previewImage={offer.previewImage}
                id={offer.id}
                title={offer.title}
                rating={offer.rating}
              />
            ))}
          </div>
        </li>

        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Cologne</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {favoriteOfferCards.map((offer) => (
              <OfferCard
                classname={'favorites'}
                offerCard={offer}
                isFavorite={offer.isFavorite}
                isPremium={offer.isPremium}
                price={offer.price}
                type={offer.type}
                key={offer.id}
                previewImage={offer.previewImage}
                id={offer.id}
                title={offer.title}
                rating={offer.rating}
              />
            ))}
          </div>
        </li>
      </ul>
    </section>
  );
}

export default FavoritesContainer;
