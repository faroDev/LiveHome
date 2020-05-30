import React from 'react';

import Card from './Card';
import ButtonIcon from './ButtonIcon';

import styles from '../styles/components/OffererCardPublication.module.sass';

const OffererCardPublication = ({ id, title, date }) => {
  const images = [
    'https://photos.zillowstatic.com/cc_ft_768/ISb9pqnpgqa00v0000000000.webp',
    'https://photos.zillowstatic.com/cc_ft_384/ISnmbaw9w1c48j0000000000.webp',
    'https://photos.zillowstatic.com/cc_ft_384/ISzbj27ywyu1ij0000000000.webp',
    'https://photos.zillowstatic.com/cc_ft_384/ISvwkib2p26wcj0000000000.webp'
  ];

  return (
    <div className={styles.demo}>
      <Card images={images}>
        <h5>{title}</h5>
        <span className={styles.date}>{date}</span>
        <div className={styles.icons}>
          <ButtonIcon icon='activity' size='24' />
          <ButtonIcon icon='eye-off' size='24' />
        </div>
      </Card>
    </div>
  );
};

export default OffererCardPublication;
