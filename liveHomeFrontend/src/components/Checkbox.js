import React from 'react';

import styles from '../styles/components/Checkbox.module.sass';

const Checkbox = (props) => {
  return (
    <label className={styles.checkbox__container}>
      <input type='checkbox' name={props.name} checked={props.checked} onChange={props.handleChange} />
      <span className={styles.checkbox__container_checkmark} />
      <p>
        {props.text}
      </p>
    </label>
  );
};

export default Checkbox;
