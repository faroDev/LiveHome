import React from 'react';

import Label from './Label';

import styles from '../styles/components/Input.module.sass';

const Input = (props) => {
  return (
    <Label nameLabel={props.label}>
      <input
        className={styles.input}
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        min={props.minValue}
        name={props.name}
        required={props.required}
        disabled={props.disabled}
      />
    </Label>
  );
};

export default Input;
