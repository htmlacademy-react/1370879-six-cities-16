import { Helmet } from 'react-helmet-async';
import { OfferCardType } from '../../types/offer';
import FavoritesContainer from '../../components/favorites-container/favorites-container';
import FavoritesEmpty from '../favorites-empty-page/favorites-empty-page';
import { getFavoritesOfferCards } from '../../utils';
// import { offers } from '../../mocks/offers/offers';

type FavoritesPageProps = {
  offers: OfferCardType[];
}

function FavoritesPage({ offers }: FavoritesPageProps) {
  const favoriteOfferCards = getFavoritesOfferCards(offers);
  return (
    <>
      <Helmet>
        <title>Страница избранного не пустая</title>
      </Helmet>

      <main className={`page__main page__main--favorites${offers.length ? '' : 'page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">
          {favoriteOfferCards.length > 0 ? <FavoritesContainer favoriteOfferCards={favoriteOfferCards} /> : <FavoritesEmpty/>}
        </div>
      </main>
    </>
  );
}

export default FavoritesPage;
