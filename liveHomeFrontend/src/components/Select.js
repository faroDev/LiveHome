import React from 'react';

import Label from './Label';

import styles from '../styles/components/Select.module.sass';

const Select = ({ label, name, options = [], value, onChange }) => {
  return (
    <Label nameLabel={label}>
      <div className={styles.selector}>
        <select name={name} value={value} onChange={onChange}>
          <option value='0'>{label}</option>
          {
            options.map((item, idx) => <option key={idx} value={item.id}>{item.name}</option>)
          }
        </select>
      </div>
    </Label>
  );
};

export default Select;
