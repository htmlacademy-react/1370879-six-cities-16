import { useState, useEffect, useRef, RefObject } from 'react';
import { LocationType } from '../types/offer';
import { TILE_LAYER_URL_PATTERN, TILE_LAYER_ATTRIBUTION } from '../const.ts';
import leaflet from 'leaflet';


type UseMapProps = {
  mapRef: RefObject<HTMLDivElement>;
  city: LocationType;
}

function useMap({ mapRef, city }: UseMapProps) {
  const [map, setMap] = useState<leaflet.Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.latitude,
          lng: city.longitude
        },
        zoom: city.zoom,
      });

      leaflet
        .tileLayer(
          TILE_LAYER_URL_PATTERN,
          {
            attribution: TILE_LAYER_ATTRIBUTION,
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}

export default useMap;
