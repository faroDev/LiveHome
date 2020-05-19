import React from 'react';

import Card from './Card';
import Icon from './Icon';
import Chip from './Chip';

import BedIcon from '../assets/statics/images/bed.png';
import ShowerIcon from '../assets/statics/images/shower.png';
import AreaIcon from '../assets/statics/images/area.png';
import GarageIcon from '../assets/statics/images/garage.png';

import styles from '../styles/components/CardPreviewPublication.module.sass';

const CardPreviewPublication = ({ images, title, price, type, description, rooms, bathrooms, area, parking }) => {
  return (
    <div className={styles.buildings__card_container}>
      <Card images={images}>
        <div className={styles.buildings__card_detail}>
          <div className={styles.buildings__card_detail_title}>
            <div>
              <p>{title}</p>
            </div>
            <div>
              <Icon name='heart' />
            </div>
          </div>
          <div className={styles.buildings__card_detail_price}>
            <span>$ {price} </span>
            <p>/ {type}</p>
          </div>
          <div className={styles.buildings__card_detail_description}>
            <p>{description}</p>
          </div>
          <div className={styles.buildings__card_detail_chip}>
            <Chip nameLabel='Detail' labelClass='rose_label' />
          </div>
          <div className={styles.buildings__card_detail_complements}>
            <div>
              <img src={BedIcon} alt='Bed icon' />
              <span>{rooms}</span>
            </div>
            <div>
              <img src={ShowerIcon} alt='Sink icon' />
              <span>{bathrooms}</span>
            </div>
            <div>
              <img src={AreaIcon} alt='' />
              <span>{area}m<sup>2</sup></span>
            </div>
            <div>
              <img src={GarageIcon} alt='' />
              <span>{parking}</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CardPreviewPublication;
