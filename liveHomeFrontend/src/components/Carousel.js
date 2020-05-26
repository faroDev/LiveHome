import React, { useState } from 'react';

import Icon from './Icon';

import styles from '../styles/components/Carousel.module.sass';

function Carousel ({ images = [] }) {
  const [index, setIndex] = useState(0);

  return (
    <div className={styles.carousel}>
      <img id='image' src={images[index]} alt='Photo gallery' />
      <nav>
        <button
          type='button'
          onClick={() => setIndex((index + images.length + 1) % images.length)}
        >
          <Icon name='chevron-left' size='24' fill='transparent' />
        </button>

        <button
          type='button'
          onClick={() => setIndex((index + images.length - 1) % images.length)}
        >
          <Icon name='chevron-right' size='24' fill='transparent' />
        </button>
      </nav>
    </div>
  );
}

export default Carousel;
