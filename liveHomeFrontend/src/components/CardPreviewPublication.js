import React from 'react';

import Card from './Card';
import Icon from './Icon';
import Chip from './Chip';
import InformationIcon from './InformationIcon';
import FavButton from './FavButton';

import BedIcon from '../assets/statics/images/bed.png';
import ShowerIcon from '../assets/statics/images/shower.png';
import AreaIcon from '../assets/statics/images/area.png';
import GarageIcon from '../assets/statics/images/garage.png';

import styles from '../styles/components/CardPreviewPublication.module.sass';
import Link from 'next/link';

const CardPreviewPublication = ({ images, id, title, price, type, description, rooms, bathrooms, area, parking, liked, handleLike, handleClickDetail }) => {
  return (
    <div className={styles.buildings__card_container}>
      <Card images={images}>
        <div className={styles.buildings__card_detail}>
          <div className={styles.buildings__card_detail_title}>
            <div>
              <p onClick={() => handleClickDetail(id)}>{title}</p>
            </div>
            <div>
              <FavButton liked={liked} onClick={() => handleLike(id, liked)} />
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
            <Link href={`/favourite/${id}`}>
              <a>
                <Chip nameLabel='Detail' labelClass='rose_label' />
              </a>
            </Link>
          </div>
          <div className={styles.buildings__card_detail_complements}>
            <InformationIcon icon={BedIcon} value={rooms} />
            <InformationIcon icon={ShowerIcon} value={bathrooms} />
            <InformationIcon icon={AreaIcon} value={`${area}m`} sup='2' />
            <InformationIcon icon={GarageIcon} value={parking} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CardPreviewPublication;
