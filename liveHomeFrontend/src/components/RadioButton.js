import React from 'react';
import styles from '../styles/components/RadioButton.module.sass';

function RadioButton ({ options, name, title }) {
  return (
    <>
      <span className={styles.radio_title}>{title}</span>
      <div className={styles.radio_container}>
        {options.map((item, key) => {
          return (
            <div key={key} className={styles.radio_item}>
              <input id={item} type='radio' name={name} value={item} />
              <label htmlFor={item}>{item}</label>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default RadioButton;
