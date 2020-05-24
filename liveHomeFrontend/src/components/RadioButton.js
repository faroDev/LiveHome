import React from 'react';

import Label from './Label';

import styles from '../styles/components/RadioButton.module.sass';

function RadioButton ({ options, name, title, onChange }) {
  return (
    <>
      <span className={styles.radio_title}>{title}</span>
      <div className={styles.radio_container}>
        {options.map((item, key) => {
          return (
            <div key={key} className={styles.radio_item}>
              <input 
                id={item}
                type='radio'
                name={name}
                value={item}
                onChange={onChange}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default RadioButton;
