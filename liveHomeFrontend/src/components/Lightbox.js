import React from 'react';
import styles from '../styles/components/Lightbox.module.sass';

function Lightbox ({ children }) {
  return (
    <>
      <div className={styles.lightbox}>
        {children}
      </div>
    </>
  );
}

export default Lightbox;
