import { useRef } from 'react';
// import leaflet, { LayerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
// import { OfferTemplateType } from '../../types/offer';

type MapContainerProps = {
  // offers?: OfferTemplateType[];
  baseClassName?: string;
}

function Map({ baseClassName = 'cities' }: MapContainerProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  // console.log(offers);
  // console.log(mapRef);
  // console.log(leaflet);
  // console.log(LayerGroup);
  return (
    <section
      className={`${baseClassName}__map map`}
      style={{ height: '500px', backgroundColor: 'red'}}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
