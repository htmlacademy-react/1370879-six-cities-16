import { Helmet } from 'react-helmet-async';
import { Navigate, useParams } from 'react-router-dom';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import NearPlaces from '../../components/near-places/near-places';
import OfferContainer from '../../components/offer-container/offer-container';
// import Map from '../../components/map/map';
import { AppRoute } from '../../const';
import { getCurrentOffer } from '../../utils';

function OfferPage() {
  const {id: offerId} = useParams();

  const currentOffer = getCurrentOffer(offerId);

  if (!currentOffer) {
    return <Navigate to={AppRoute.NotFound} replace />;
  }

  // const cityInfo = CITY_LOCATIONS.find((city) => city.name === currentOffer.city.name);

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
          {/* <Map city={cityInfo.location} baseClassName='offer'/> */}
          <div className="container">
            <NearPlaces />
          </div>
        </section>
      </main>
    </>
  );
}

export default OfferPage;
