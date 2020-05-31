import React from 'react';
import Link from 'next/link';

import logo from '../assets/statics/images/LiveHome-logo.png';
import styles from '../styles/components/MarkerMap.module.sass';

const MarkerMap = ({text, propertyId, detail }) => {

  const MarkerBuilding = () => {
    return(
      <Link href={`/property/buildings?id=${propertyId}`} shallow={true}>
        <a>
          <div className={styles.marker_map__container}>
            <div className={styles.marker_map__data}>
              <div>
                <img src={logo} alt='logo live home' />
              </div>
              <div>
                <p>{text}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    );
  };

  const MarkerDetail = () => {
    return(
      <div className={styles.marker_map__container}>
        <div className={styles.marker_map__data}>
          <div>
            <img src={logo} alt='logo live home' />
          </div>
          <div>
            <p>{text}</p>
          </div>
        </div>
      </div>
    );
  };

  if (detail){
    return MarkerDetail();
  }
    
  return MarkerBuilding();
};

export default MarkerMap;