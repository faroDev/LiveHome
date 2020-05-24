import React from 'react';
import Router from 'next/router'
import styles from '../styles/components/Map.module.sass';
import Button from './Button';

const Map = ({ children }) => {
  return (
    <div className={styles.mapContainer}>
      {children}
      <Button value='Confirm location' buttonType='button' handleClick={() => Router.push('/post/new_post_step_three')}/>
    </div>
  );
};

export default Map;
