import { Helmet } from 'react-helmet-async';
import { Offer } from '../../types/offers';
import OfferCard from '../../components/offer-card/offer-card';

type FavoritesPageProps = {
  offers: Offer[];
}

function FavoritesPage({ offers }: FavoritesPageProps) {
  return (
    <>
      <Helmet>
        <title>Страница избранного не пустая</title>
      </Helmet>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
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
                  {offers.map((offer) => (
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
                      // city={{
                      //   name: '',
                      //   location: {
                      //     latitude: 0,
                      //     longitude: 0,
                      //     zoom: 0
                      //   }
                      // }} location={{
                      //   latitude: 0,
                      //   longitude: 0,
                      //   zoom: 0
                      // }}
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
                  {offers.map((offer) => (
                    <OfferCard
                      offerCard={offer}
                      isFavorite={offer.isFavorite}
                      isPremium={offer.isPremium}
                      price={offer.price}
                      type={offer.type}
                      key={offer.id}
                      previewImage={offer.previewImage}
                      id={offer.id}
                      title={offer.title}
                      // city={{
                      //   name: '',
                      //   location: {
                      //     latitude: 0,
                      //     longitude: 0,
                      //     zoom: 0
                      //   }
                      // }} location={{
                      //   latitude: 0,
                      //   longitude: 0,
                      //   zoom: 0
                      // }}
                      rating={offer.rating}
                      classname={'cities'}
                    />
                  ))}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}

export default FavoritesPage;
