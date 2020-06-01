import React from 'react';

import Label from './Label';

import styles from '../styles/components/TextArea.module.sass';

const TextAreaComponent = (props) => {
  return (
    <Label nameLabel={props.label}>
      <textarea
        className={styles.textArea}
        value={props.value}
        autoComplete='off'
        maxLength='300'
        name={props.name}
        required={props.required}
        onChange={props.onChange}
      />
    </Label>
  );
};

export default TextAreaComponent;
