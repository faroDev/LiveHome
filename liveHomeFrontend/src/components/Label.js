import React from 'react';

import styles from '../styles/components/Label.module.sass';

const Label = ({ nameLabel, children }) => {
  return (
    <label className={styles.label}>
      <p>{nameLabel}</p>
      {children}
    </label>
  );
};

export default Label;
