import React from 'react';
import FeatherIcon from 'feather-icons-react';
import styles from '../styles/components/ButtonIcon.module.sass';

function ButtonIcon ({icon, size}) {
  return(
    <button className={styles.icon} type='button'>
      <FeatherIcon icon={icon} size={size} />
    </button>
  )
}

export default ButtonIcon;
