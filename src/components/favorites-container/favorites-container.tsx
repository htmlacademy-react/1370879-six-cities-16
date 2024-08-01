// import OfferCard from '../../components/offer-card/offer-card';
import { OfferCardType } from '../../types/offer';

type FavoritesContainerProps = {
  favoriteOfferCards: OfferCardType[];
}

function FavoritesContainer({ favoriteOfferCards }: FavoritesContainerProps) {
  // console.log(favoriteOfferCards);
  // console.log(OfferCard);
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                {/* <span>{favoriteOfferCards.map(item)}</span> */}
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {/* {favoriteOfferCards.map((offer) => (
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
            ))} */}
            {favoriteOfferCards.map((card) => card.city.name)}
          </div>
        </li>

        {/* <li className="favorites__locations-items">
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
        </li> */}
      </ul>
    </section>
  );
}

export default FavoritesContainer;
