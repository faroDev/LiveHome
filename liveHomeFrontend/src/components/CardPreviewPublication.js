import React, { useContext } from 'react';
import slug from '../utils/slug';
import UserContext from './UserContext';
import Router from 'next/router';

import Card from './Card';
import Icon from './Icon';
import Chip from './Chip';
import InformationIcon from './InformationIcon';

import BedIcon from '../assets/statics/images/bed.png';
import ShowerIcon from '../assets/statics/images/shower.png';
import AreaIcon from '../assets/statics/images/area.png';
import GarageIcon from '../assets/statics/images/garage.png';

import styles from '../styles/components/CardPreviewPublication.module.sass';
import Link from 'next/link';

const CardPreviewPublication = ({ images, id, title, price, type, description, rooms, bathrooms, area, parking }) => {

  // const { post, setPost } = useContext(UserContext);

  const handleClickDetail = (id) => {
    // setPost(post);
    Router.push(`/property/buildings?id=${id}`, slug(title), { shallow: true });
  }
  return (
    <div className={styles.buildings__card_container}>
      <Card images={images}>
        <div className={styles.buildings__card_detail}>
          <div className={styles.buildings__card_detail_title}>
            <div>
              {/* <Link href={`/property/${id}`} as={`/property/${slug(title)}`}>
                <a target='_blank'> */}
                  <p onClick={() => handleClickDetail(id)}>{title}</p>
                {/* </a>
              </Link> */}
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
