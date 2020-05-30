import React from 'react';

import setInputValue from '../../src/hooks/useInputValue';

import Layout from '../../src/components/Layout';
import SearchBar from '../../src/components/SearchBar';
import Modal from '../../src/components/Modal';
import OffererCardPublication from '../../src/components/OffererCardPublication';

import API from '../../src/utils/api';

import styles from '../../src/styles/pages/post/dashboard_user.module.sass';

const dashboardUser = ({ properties }) => {
  const inputSearch = setInputValue('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('entró');
  };

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.top}>
          <Modal buttonText='Filter'>
            <p>Filter form</p>
          </Modal>
          <SearchBar name='search' handleSubmit={handleSubmit} {...inputSearch} />
        </div>
        <h1>Dashboard</h1>
        <div className={styles.offers}>
          {properties.map((item, key) => {
            return <OffererCardPublication key={key} id={item.id} title={item.title} date={item.createdAt} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps () {
  const properties = await API.getProperties();
  return {
    props: {
      properties: properties.data
    }
  };
}

export default dashboardUser;
