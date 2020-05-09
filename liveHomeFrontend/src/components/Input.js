import React from 'react';

//styles
import styles from '../styles/components/Input.module.sass'

const Input = (props) => {
  return (
    <input 
      className={styles.input} 
      type={props.type} 
      onChange={props.handleChange} 
      value={props.value} 
      min={props.minValue}
      name={props.name}
    />
  )
}

export default Input;