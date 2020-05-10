import React from 'react';
import styles from '../styles/components/Select.module.sass';

const Select = ({name, options}) => {
  return (
    <select className={styles.select} name={name}>
      {options.map((item, key) => <option key={key} value={item}>{item}</option>) }
    </select>
  )
}

export default Select;
