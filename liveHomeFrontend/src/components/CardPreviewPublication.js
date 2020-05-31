import React from 'react';
import Link from 'next/link';
import slug from '../../src/utils/slug';

import Card from './Card';
import Chip from './Chip';
import InformationIcon from './InformationIcon';
import FavButton from './FavButton';

import BedIcon from '../assets/statics/images/bed.png';
import ShowerIcon from '../assets/statics/images/shower.png';
import AreaIcon from '../assets/statics/images/area.png';
import GarageIcon from '../assets/statics/images/garage.png';

import styles from '../styles/components/CardPreviewPublication.module.sass';

const CardPreviewPublication = ({ images, id, title, price, type, description, rooms, bathrooms, area, parking, liked, handleLike }) => {
  return (
    <div className={styles.buildings__card_container}>
      <Card images={images}>
        <div className={styles.buildings__card_detail}>
          <div className={styles.buildings__card_detail_title}>
            <div>
              <Link href={`/property/buildings?id=${id}`} shallow={true} >
                <a>{title}</a>
              </Link>
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
            <Chip nameLabel='Detail' labelClass='rose_label' />
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
