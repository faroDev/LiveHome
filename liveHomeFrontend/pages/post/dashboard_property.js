import React from 'react';

import Layout from '../../src/components/Layout';
import BarChart from '../../src/components/BarChart';
import PieChart from '../../src/components/PieChart';

import styles from '../../src/styles/pages/post/dashboard_property.module.sass';

const dashboardProperty = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Property name</h1>
        <BarChart>
          <img src='/static/visitors.png' alt='Icon visitors' />
          <h2>Visitors</h2>
        </BarChart>
        <PieChart>
          <img src='/static/like.png' alt='Icon like' />
          <h2>Favourites</h2>
        </PieChart>
      </div>
    </Layout>
  );
};

export default dashboardProperty;
