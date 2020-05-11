import React from 'react';

import styles from '../styles/components/CloseButton.module.sass';
import FeatherIcon from 'feather-icons-react';

const CloseButton = (props) => {
  return (
    <button className={styles.closeButton} onClick={props.handleClick}>
      <FeatherIcon icon='x' size={20} stroke='#4424A6' />
    </button>
  );
};

export default CloseButton;
