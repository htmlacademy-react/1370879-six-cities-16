// import { useRef } from 'react';
// import leaflet, { LayerGroup } from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import { OfferTemplateType } from '../../types/offer';
// import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';

// type MapProps = {
//   offers?: OfferTemplateType[];
//   city: string;
//   baseClassName?: string;
//   activeOffer?: OfferTemplateType | null;
// }

// const defaultCustomIcon = leaflet.icon({
//   iconUrl: URL_MARKER_DEFAULT,
//   iconSize: [27, 39],
//   iconAnchor: [13, 39],
// });

// const currentCustomIcon = leaflet.icon({
//   iconUrl: URL_MARKER_CURRENT,
//   iconSize: [27, 39],
//   iconAnchor: [13, 39],
// });

// function Map({ baseClassName = 'cities', city, offers, activeOffer }): MapProps {
//   const mapRef = useRef<HTMLDivElement>(null);

//   return (
//     <section
//       className={`${baseClassName}__map map`}
//       style={{ height: '500px', backgroundColor: 'red'}}
//       ref={mapRef}
//     >
//     </section>
//   );
// }

// export default Map;
