import React from 'react';
import styles from '../styles/components/Map.module.sass';

const Map = ({ children }) => {
  return (
    <div className={styles.mapContainer}>
      {children}
    </div>
  );
};

export default Map;
