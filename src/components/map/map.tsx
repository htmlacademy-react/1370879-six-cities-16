import { useEffect, useRef } from 'react';
import leaflet, { LayerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { OfferTemplateType, LocationType } from '../../types/offer';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import useMap from '../../hooks/use-map';

type MapProps = {
  offers?: OfferTemplateType[];
  city: LocationType;
  baseClassName?: string;
  activeOffer?: OfferTemplateType | null;
}

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

// console.log(defaultCustomIcon);
// console.log(currentCustomIcon);

function Map({ baseClassName = 'cities', city, offers, activeOffer }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap({ mapRef, city });
  const markerLayer = useRef<LayerGroup>(leaflet.layerGroup());

  useEffect(() => {
    if (map) {
      // console.log(map);
      map.setView([city.latitude, city.longitude], city.zoom);
      markerLayer.current.addTo(map);
      markerLayer.current.clearLayers();
    }
  }, [city, map]);

  useEffect(() => {
    if (map && offers) {
      markerLayer.current.clearLayers();
      offers.forEach((offer) => {
        if (offer.location) {
          leaflet.
            marker({
              lat: offer.location.latitude,
              lng: offer.location.longitude,
            }, {
              icon: activeOffer && activeOffer.id === offer.id ? currentCustomIcon : defaultCustomIcon,
            }).addTo(markerLayer.current);
        }
      });
    }
  }, [activeOffer, map, offers]);

  // console.log(city);
  // console.log(LayerGroup);
  // console.log(offers);
  // console.log(activeOffer);

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
