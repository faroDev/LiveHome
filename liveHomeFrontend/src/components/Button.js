import React from 'react';
import styles from '../assets/styles/components/Button.module.sass';

const Label = ({ value, buttonType }) => {
  return (
    <>
      <button className={`${styles.Button} ${styles[buttonType]}`}>
        {value}
      </button>
    </>
  );
};

export default Label;
