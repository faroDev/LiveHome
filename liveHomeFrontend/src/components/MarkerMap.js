import React from 'react';

import logo from '../assets/statics/images/LiveHome-logo.png';
import styles from '../styles/components/MarkerMap.module.sass';

const MarkerMap = ({ text }) => {
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

export default MarkerMap;