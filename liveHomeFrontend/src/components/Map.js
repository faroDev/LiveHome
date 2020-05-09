import React from 'react';
import styles from '../assets/styles/components/Map.module.sass';
import Button from './Button';

const Map = ({ children }) => {
  return (
    <div className={styles.mapContainer}>
      {children}
      <Button value='Confirm location' buttonType='nextStepButton' />
    </div>
  );
};

export default Map;
