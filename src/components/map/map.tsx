import { useEffect } from 'react';
import { OfferTemplateType } from '../../types/offer';

type MapProps = {
  offers: OfferTemplateType[];
}

function Map({ offers }: MapProps) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(offers.map((offer) => offer.id));
  });
  return (
    <div style={{ height: '500px', backgroundColor: 'red'}}></div>
  );
}

export default Map;
