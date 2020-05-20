import React from 'react';

import styles from '../styles/components/InformationIcon.module.sass';

const InformationIcon = ({ icon, alt = 'icon', value, sup, children }) => {
  return (
    <div className={styles.InformationIcon__container}>
      <img src={icon} alt={alt} />
      <span>{value}<sup>{sup}</sup></span>
      {children}
    </div>
  );
};

export default InformationIcon;
