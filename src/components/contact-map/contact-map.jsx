import React from 'react';
import {Map, Marker, MarkerLayout} from 'yandex-map-react';
import {LocationCoordinates} from '../../const';

const ContactMap = () => {
  const [latitude, longitude] = LocationCoordinates;
  const mapState = {
    controls: [`default`]
  };

  return (
    <Map width={`100%`} height={`100%`} state={mapState} center={[latitude, longitude + 0.005]} zoom={14}>
      <Marker lat={latitude} lon={longitude}>
        <MarkerLayout>
          <div className="pointer">
            <svg width="32" height="40">
              <use xlinkHref="img/sprite.svg#location"></use>
            </svg>
          </div>
        </MarkerLayout>
      </Marker>
    </Map>
  );
};

export default ContactMap;
