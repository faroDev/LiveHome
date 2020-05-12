import React from 'react';
import styles from '../styles/components/Card.module.sass';

const Card = ({ imgSource, children }) => {
  return (
    <div className={styles.card}>
      <figure className={styles.imageContainer}>
        <img className={styles.primaryImage} src={imgSource} />
      </figure>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Card;
