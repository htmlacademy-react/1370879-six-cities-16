import { Helmet } from 'react-helmet-async';
import { Offer } from '../../types/offers';
import FavoritesContainer from '../../components/favorites-container/favorites-container';
import FavoritesEmpty from '../favorites-empty-page/favorites-empty-page';
import { offers } from '../../mocks/offers/offers';

type FavoritesPageProps = {
  favoriteOfferCards: Offer[];
}

function FavoritesPage({ favoriteOfferCards }: FavoritesPageProps) {
  return (
    <>
      <Helmet>
        <title>Страница избранного не пустая</title>
      </Helmet>

      <main className={`page__main page__main--favorites${offers.length ? '' : 'page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">
          {favoriteOfferCards.length ? <FavoritesContainer favoriteOfferCards={favoriteOfferCards} /> : <FavoritesEmpty/>}
        </div>
      </main>
    </>
  );
}

export default FavoritesPage;
