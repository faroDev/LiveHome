import React from 'react';

import Carousel from './Carousel';
import Icon from './Icon';
import Chip from './Chip';
import InformationIcon from './InformationIcon';

import BedIcon from '../assets/statics/images/bed.png';
import ShowerIcon from '../assets/statics/images/shower.png';
import AreaIcon from '../assets/statics/images/area.png';
import GarageIcon from '../assets/statics/images/garage.png';
import FurnishedIcon from '../assets/statics/images/furnished.png';
import PoolIcon from '../assets/statics/images/pool.png';
import HeatingIcon from '../assets/statics/images/heating.png';
import WarehouseIcon from '../assets/statics/images/warehouse.png';
import SecurityIcon from '../assets/statics/images/security.png';
import ElevatorIcon from '../assets/statics/images/elevator.png';

import styles from '../styles/components/BuildingDetail.module.sass';

const BuildingDetail = ({ building, children }) => {
  return (
    <div className={styles.buildingDetail__container}>
      <div className={styles.buildingDetail__carousel}>
        <Carousel images={building.images} />
      </div>
      <div className={styles.buildingDetail__section_icon}>
        <a href={`tel:${building.telefono}`}>
          <Icon name='phone' />
        </a>
        <a href={`mailto:${building.email}`} target='_blank'>
          <Icon name='mail' />
        </a>
        <a>
          <Icon name='heart' />
        </a>
      </div>
      <div className={styles.buildingDetail__title}>
        <p>{building.title}</p>
      </div>
      <div className={styles.buildingDetail__description}>
        <p>{building.description}</p>
      </div>
      <div>
        <Chip nameLabel='Detail' labelClass='rose_label' />
      </div>
      <div className={styles.buildingDetail__detail}>
        <InformationIcon icon={AreaIcon} value={building.area} sup='2'>
          <p>Area</p>
        </InformationIcon>
        <InformationIcon icon={BedIcon} value={building.rooms}>
          <p>Bedrooms</p>
        </InformationIcon>
        <InformationIcon icon={ShowerIcon} value={building.bathrooms}>
          <p>Bathrooms</p>
        </InformationIcon>
        <InformationIcon icon={GarageIcon} value={building.parking}>
          <p>Garage</p>
        </InformationIcon>
        <InformationIcon icon={FurnishedIcon} value={building.furnished}>
          <p>Furnished</p>
        </InformationIcon>
        <InformationIcon icon={PoolIcon} value={building.pool}>
          <p>Pool</p>
        </InformationIcon>
        <InformationIcon icon={HeatingIcon} value={building.heating}>
          <p>Heating</p>
        </InformationIcon>
        <InformationIcon icon={WarehouseIcon} value={building.warehouse}>
          <p>Warehose</p>
        </InformationIcon>
        <InformationIcon icon={SecurityIcon} value={building.security}>
          <p>Security</p>
        </InformationIcon>
        <InformationIcon icon={ElevatorIcon} value={building.elevator}>
          <p>Elevator</p>
        </InformationIcon>
      </div>
      <div className={styles.buildingDetail__map_container}>
        
      </div>
      <div>
        <Chip nameLabel='Nearby places' labelClass='purple_label' />
      </div>
      <div className={styles.buildingDetail__description}>
        <p>{building.nearby}</p>
      </div>
      <div className={styles.buildingDetail__aux_component}>
        {children}
      </div>
    </div> 
  );
};

export default BuildingDetail;