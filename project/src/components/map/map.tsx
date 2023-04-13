import React from 'react';
import { Icon, Marker } from 'leaflet';
import {useRef, useEffect} from 'react';
import 'leaflet/dist/leaflet.css';
import { City, Offer } from '../../types/offers';
import useMap from '../../hooks/use-map/use-map';

type MapProps = {
    city: City;
    points: Offer[];
    selectedPoint?: number | null;
    className: string;
  };

const defaultCustomIcon = new Icon({
  iconUrl: './img/pin.svg',
  iconSize: [29, 40],
  iconAnchor: [15, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: './img/pin-active.svg',
  iconSize: [29, 40],
  iconAnchor: [15, 40]
});

export default function Map({ className, city, points, selectedPoint }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.city.location.latitude,
          lng: point.city.location.longitude
        });

        marker
          .setIcon(
            selectedPoint !== null && point.id === selectedPoint
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return (
    <section
      className={`${className} map`}
      ref={mapRef}
    >
    </section>
  );

}
