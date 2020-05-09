import React from 'react';

//styles
import styles from '../styles/components/TextArea.module.sass'

const TextArea = (props) => {
  return(
    <textarea 
      className={styles.textArea}
      value={props.value} 
      autoComplete='off' 
      maxLength='300' 
      name={props.name}
      required={props.required}
      onChange={props.handleChange}
    />
  );
}

export default TextArea;