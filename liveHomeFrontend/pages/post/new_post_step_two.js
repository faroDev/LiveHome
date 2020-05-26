import React from 'react';

import Layout from '../../src/components/Layout';
import Map from '../../src/components/Map';

import styles from '../../src/styles/pages/post/new_post_step_two.module.sass';

const newPostStepTwo = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Select location - step 2/4</h1>
        <Map />
      </div>
    </Layout>
  );
};

export default newPostStepTwo;
