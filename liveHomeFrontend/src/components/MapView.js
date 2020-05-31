import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import MarkerMap from '../components/MarkerMap';

class MapView extends Component {
  static defaultProps = {
    center: {
      lat: 4.656109,
      lng: -74.057414
    },
    zoom: 15
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDwvwz-L38kItJd1lwwaP7sjtiTrtThwwg' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <MarkerMap
            lat={4.656109}
            lng={-74.057414}
            text="$200.000.000"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapView;