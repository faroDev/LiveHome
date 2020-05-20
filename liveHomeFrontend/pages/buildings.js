import React from 'react';

import Layout from '../src/components/Layout';
import Button from '../src/components/Button';
import SearchBar from '../src/components/SearchBar';
import Chip from '../src/components/Chip';
import CardPreviewPublication from '../src/components/CardPreviewPublication';

import styles from '../src/styles/pages/buildings.module.sass';

const Buildings = () => {
  return (
    <Layout>
      <div className={styles.buildings__container}>
        <div className={styles.buildings__filter_container}>
          <div className={styles.buildings__filter_container_button}>
            <Button value='Filter' buttonClass='grayLinearButton' />
          </div>
          <div className={styles.buildings__filter_container_searchbar}>
            <SearchBar />
          </div>
        </div>
        <div className={styles.buildings__label}>
          <Chip nameLabel='Where found ### properties' labelClass='gray_label' />
        </div>
        <CardPreviewPublication
          images={[]}
          title='prueba titulo'
          price='895000' type='Rent'
          description='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock'
          rooms='4'
          bathrooms='2'
          area='180'
          parking='2'
        />
      </div>
    </Layout>
  );
};

export default Buildings;
