'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import 'leaflet/dist/leaflet.css';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

const MapView = () => {
  const { data, selectedState } = useSelector(state => state.covid);
  const states = selectedState ? data.filter(d => d.state === selectedState) : data;
 
  const [L, setL] = useState(null);

  useEffect(() => {
    import('leaflet').then(leaflet => {
      delete leaflet.Icon.Default.prototype._getIconUrl;
      leaflet.Icon.Default.mergeOptions({
        iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
      });
      setL(leaflet);
    });
  }, []);

  if (!L) return null;

  return (
    <MapContainer center={[22.9734, 78.6569]} zoom={5} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {states.map((state) => (
        <Marker key={state.state} position={[state.lat, state.long]}>
          <Popup>
            <strong>{state.state}</strong><br />
            Total: {state.total}<br />
            Active: {state.active}<br />
            Recovered: {state.recovered}<br />
            Deaths: {state.deaths}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
