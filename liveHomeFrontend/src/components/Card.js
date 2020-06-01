import React from 'react';

import Carousel from './Carousel';

import styles from '../styles/components/Card.module.sass';

const Card = ({ images, children }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Carousel images={images} />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Card;
