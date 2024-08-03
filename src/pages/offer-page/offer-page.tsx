import { Helmet } from 'react-helmet-async';
import { Navigate, useParams } from 'react-router-dom';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import { AppRoute } from '../../const';
import { getCurrentOffer } from '../../utils';
import OfferContainer from '../../components/offer-container/offer-container';

function OfferPage() {
  const {id: offerId} = useParams();
  // const params = useParams();

  // console.log(params);

  // console.log(offerId);

  const currentOffer = getCurrentOffer(offerId);

  // console.log(currentOffer);

  if (!currentOffer) {
    return <Navigate to={AppRoute.NotFound} replace />;
  }

  return (
    <>
      <Helmet>
        <title>Страница предложения</title>
      </Helmet>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <OfferGallery images={currentOffer.images}/>
          </div>
          <OfferContainer offer={currentOffer} />
          <section className="offer__map map"></section>
        </section>
      </main>
    </>
  );
}

export default OfferPage;
