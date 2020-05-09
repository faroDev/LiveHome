import React from 'react';

import CloseButton from './CloseButton';
//styles
import styles from '../styles/components/PreviewImage.module.sass';

const PreviewImage = (props) => {
  return(
    <div className={styles.previewImage__container}>
      <CloseButton />
      <img src={props.image} alt='preview image property' />
    </div>
  )
}

export default PreviewImage;