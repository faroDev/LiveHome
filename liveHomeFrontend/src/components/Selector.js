import React from 'react';

import Label from './Label';

import styles from '../styles/components/Selector.module.sass';

const Selector = ({ label, name, options=[], value, onChange }) => {
  return (
    <Label nameLabel={label}>
      <div className={styles.selector}>
        <select name={name} value={value} onChange={onChange}>
          {
            options.length &&
            options.map((item, idx) => <option key={idx} value={item.value}>{item.label}</option>)
          }
        </select>
      </div>
    </Label>
  );
};

export default Selector;
