import React from 'react';
import styles from '../styles/components/RadioButton.module.sass';

function RadioButton ({ options, name }) {
  return (
    <>
      {options.map((item, key) => {
        return (
          <div key={key} className={styles.radio}>
            <input id={item} type='radio' name={name} value={item} />
            <label htmlFor={item}>{item}</label>
          </div>
        );
      })}
    </>
  );
}

export default RadioButton;
