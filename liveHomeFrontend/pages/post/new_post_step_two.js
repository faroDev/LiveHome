import React from 'react';
import Router from 'next/router';

import Layout from '../../src/components/Layout';
import Map from '../../src/components/Map';
import Button from '../../src/components/Button';

import styles from '../../src/styles/pages/post/new_post_step_two.module.sass';

const newPostStepTwo = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Select location - step 2/4</h1>
        <Map />
        <div className={styles.buttons}>
          <Button value='Back' buttonClass='grayLightLinearButton' buttonType='button' handleClick={() => Router.back()} />
          <Button value='Continue' buttonClass='greenLinearButton' buttonType='submit' handleClick={() => Router.push('/post/new_post_step_three')} />
        </div>
      </div>
    </Layout>
  );
};

export default newPostStepTwo;
