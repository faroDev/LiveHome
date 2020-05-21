import React from 'react';

import styles from '../styles/components/Chip.module.sass';

const Chip = ({ nameLabel, labelClass }) => {
  return (
    <span className={`${styles.label} ${styles[labelClass]}`}>
      {nameLabel}
    </span>
  );
};

export default Chip;
