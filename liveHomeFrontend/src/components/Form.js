import React from 'react';

import styles from '../styles/components/Form.module.sass';

const Form = ({ children, onSubmit }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
