import React from 'react';

import styles from '../styles/components/FormField.module.sass';

const FormField = ({ children }) => {
  return (
    <div className={styles.formField}>
      {children}
    </div>
  );
};

export default FormField;
