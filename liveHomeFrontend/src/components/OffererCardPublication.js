import React from 'react';

import Card from './Card';

import styles from '../styles/components/OffererCardPublication.module.sass';

const OffererCardPublication = ({ id, title, date, images }) => {

  return (
    <div className={styles.demo}>
      <Card images={images}>
        <h5>{title}</h5>
        <span className={styles.date}>{date}</span>
      </Card>
    </div>
  );
};

export default OffererCardPublication;
