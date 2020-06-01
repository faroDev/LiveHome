import React from 'react';
import GoogleMapReact from 'google-map-react';

import MarkerMap from '../components/MarkerMap';

const MapView = ({ zoom, dataMarker, detail = false }) => {
  const initialValues = {
    center: {
      lat: dataMarker.length > 0 ? dataMarker[0].lat : 4.6097100,
      lng: dataMarker.length > 0 ? dataMarker[0].lng : -74.0817500
    }
  };

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDwvwz-L38kItJd1lwwaP7sjtiTrtThwwg' }}
        defaultCenter={initialValues.center}
        defaultZoom={zoom}
      >
        {
          dataMarker.length > 0 &&
          dataMarker.map((item, idx) => {
            return (
              <MarkerMap
                key={idx}
                lat={item.lat}
                lng={item.lng}
                text={`$ ${item.text}`}
                propertyId={item.propertyId}
                detail={detail}
              />
            );
          })
        }
      </GoogleMapReact>
    </div>
  );
};

export default MapView;
