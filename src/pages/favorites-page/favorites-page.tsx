import { Helmet } from 'react-helmet-async';
import { Offer } from '../../types/offers';
import FavoritesCard from '../../components/favorites-card/favorites-card';

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
                    <FavoritesCard
                      isFavorite={offer.isFavorite}
                      isPremium={offer.isPremium}
                      price={offer.price}
                      type={offer.type}
                      key={offer.id}
                      src={offer.previewImage}
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
                    <FavoritesCard
                      isFavorite={offer.isFavorite}
                      isPremium={offer.isPremium}
                      price={offer.price}
                      type={offer.type}
                      key={offer.id}
                      src={offer.previewImage}
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
