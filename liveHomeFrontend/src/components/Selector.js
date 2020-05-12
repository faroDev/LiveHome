import React from 'react';

import Label from './Label';

import styles from '../styles/components/Selector.module.sass';

const Selector = (props) => {
  return (
    <Label nameLabel={props.label}>
      <div className={styles.selector}>
        <select>
          {
            props.options.length &&
            props.options.map((item, idx) => <option key={idx} value={item.value}>{item.label}</option>)
          }
        </select>
      </div>
    </Label>
  );
};

export default Selector;
