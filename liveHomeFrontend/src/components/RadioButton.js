import React from 'react';

import styles from '../styles/components/RadioButton.module.sass';

function RadioButton ({ options = [], name, title, value, onChange }) {
  return (
    <>
      <span className={styles.radio_title}>{title}</span>
      <div className={styles.radio_container}>
        {options.map((item, key) => {
          return (
            <div key={key} className={styles.radio_item}>
              <input
                id={item.id}
                type='radio'
                name={name}
                value={item.id}
                onChange={onChange}
                checked={item.id == value}
              />
              <label htmlFor={item.id}>{item.name}</label>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default RadioButton;
