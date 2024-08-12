// import { offers } from '../../mocks/offers/offers';
import { OfferTemplateType } from '../../types/offer';
import Map from '../map/map';

type MapContainerProps = {
  offers: OfferTemplateType[];
}

function MapContainer({ offers }: MapContainerProps) {
  return (
    <section className="cities__map map">
      <Map offers={offers}/>
    </section>
  );
}

export default MapContainer;
