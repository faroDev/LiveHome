import React from 'react';

import styles from '../styles/components/AlertField.module.sass';

const AlertField = ({message}) => {
  return (
    <div className={styles.alertField__container}>
      <span className={styles.alertField__info}>{message}</span>
    </div>
  );
};

export default AlertField;
