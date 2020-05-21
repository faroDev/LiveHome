import React from 'react';

import Label from './Label';

import styles from '../styles/components/Select.module.sass';

const Select = ({ label, name, options = [] }) => {
  return (
    <Label nameLabel={label}>
      <div className={styles.selector}>
        <select name={name}>
          {
            options.map((item, idx) => <option key={idx} value={item.value}>{item.label}</option>)
          }
        </select>
      </div>
    </Label>
  );
};

export default Select;
