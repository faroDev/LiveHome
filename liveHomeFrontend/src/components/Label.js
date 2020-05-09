import React from 'react';
import styles from '../assets/styles/components/Label.module.sass';

const Label = ({ value }) => {
  return (
    <>
      <label className={styles.inputLabel}>{value}</label>
    </>
  );
};

export default Label;
