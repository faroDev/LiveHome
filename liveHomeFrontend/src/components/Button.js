import React from 'react';
import styles from '../styles/components/Button.module.sass';

const Label = ({ value, buttonClass, buttonType, handleClick, disabled }) => {
  return (
    <>
      <button
        onClick={handleClick}
        type={buttonType}
        className={`${styles.Button} ${styles[buttonClass]}`}
        disabled={disabled}
      >
        {value}
      </button>
    </>
  );
};

export default Label;
