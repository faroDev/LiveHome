import React from 'react';
import styles from '../styles/components/Modal.module.sass';

import Button from '../components/Button';
import FeatherIcon from 'feather-icons-react';

function handleOpen () {
  document.getElementById('modal').style.display = 'flex';
}
function handleClose (e) {
  e.preventDefault();
  document.getElementById('modal').style.display = 'none';
}

function Modal ({ buttonText, children }) {
  return (
    <>
      <Button value={buttonText} buttonClass='grayLightLinearButton' buttonType='button' handleClick={handleOpen} />
      <div className={styles.modal} id='modal'>
        <div className={styles.modal__content}>
          <a className={styles.modal__content_close} href='' onClick={(e) => { handleClose(e); }}>
            <FeatherIcon icon='x' size='30px' />
          </a>
          {children}
        </div>
      </div>
    </>
  );
}

export default Modal;
