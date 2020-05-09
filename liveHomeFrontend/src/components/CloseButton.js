import React from 'react';

//styles
import styles from '../styles/components/CloseButton.module.sass';

const CloseButton = (props) => {
  return(
    <button className={styles.closeButton} onClick={props.handleClick}>
      <img src='/static/closeButton.png' alt='close button' />
    </button>
  );
}

export default CloseButton;