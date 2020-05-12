import React from 'react';
import styles from '../styles/components/Button.module.sass';

const Label = ({ value, buttonClass, buttonType }) => {
  return (
    <>
      <button
        type={buttonType}
        className={`${styles.Button} ${styles[buttonClass]}`}
      >
        {value}
      </button>
    </>
  );
};

export default Label;
