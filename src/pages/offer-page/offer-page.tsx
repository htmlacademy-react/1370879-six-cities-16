import { Helmet } from 'react-helmet-async';
import { Navigate, useParams } from 'react-router-dom';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
// import ReviewsForm from '../../components/review-form/review-form';
import NearPlaces from '../../components/near-places/near-places';
import { AppRoute } from '../../const';
import { getCurrentOffer } from '../../utils';
import OfferContainer from '../../components/offer-container/offer-container';

function OfferPage() {
  const {id: offerId} = useParams();

  const currentOffer = getCurrentOffer(offerId);

  if (!currentOffer) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  // console.log(currentOffer);
  // const offersNearBy = offers.slice(0, 3);
  // console.log(currentOffer);
  // console.log(offersNearBy);
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
          <div className="offer__container container">
            <div className="offer__wrapper">
              <OfferContainer offer={currentOffer}/>
              <section className="offer__map map"></section>
              <NearPlaces/>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default OfferPage;
