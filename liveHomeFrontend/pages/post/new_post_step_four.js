import React from 'react';
import Router from 'next/router';

import Layout from '../../src/components/Layout';
import Form from '../../src/components/Form';
import FormField from '../../src/components/FormField';
import TextArea from '../../src/components/TextArea';
import PreviewImage from '../../src/components/PreviewImage';
import Button from '../../src/components/Button';

import styles from '../../src/styles/pages/post/new_post_step_four.module.sass';

const newPostStepFour = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('entró');
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h1>Media - step 4/4</h1>
        <Form onSubmit={handleSubmit}>
          <FormField>
            <TextArea label='Description'/>
            <span className={styles.info}>Max. 6 photos and 1 video</span>
          </FormField>
          <FormField>
            <Button value='Upload image' buttonClass='redLinearButton' buttonType='button'/>
          </FormField>
          <div className={styles.thumbnails}>
            <PreviewImage image='https://images.adsttc.com/media/images/5be9/fd5c/08a5/e5a5/8c00/008f/newsletter/CARLES_FAUS_ARQUITECTURA_-_CARMEN_HOUSE_(2).jpg?1542061390' />
            <PreviewImage image='https://images.adsttc.com/media/images/5be9/fd5c/08a5/e5a5/8c00/008f/newsletter/CARLES_FAUS_ARQUITECTURA_-_CARMEN_HOUSE_(2).jpg?1542061390' />
            <PreviewImage image='https://images.adsttc.com/media/images/5be9/fd5c/08a5/e5a5/8c00/008f/newsletter/CARLES_FAUS_ARQUITECTURA_-_CARMEN_HOUSE_(2).jpg?1542061390' />
            <PreviewImage image='https://images.adsttc.com/media/images/5be9/fd5c/08a5/e5a5/8c00/008f/newsletter/CARLES_FAUS_ARQUITECTURA_-_CARMEN_HOUSE_(2).jpg?1542061390' />
            <PreviewImage image='https://images.adsttc.com/media/images/5be9/fd5c/08a5/e5a5/8c00/008f/newsletter/CARLES_FAUS_ARQUITECTURA_-_CARMEN_HOUSE_(2).jpg?1542061390' />
            <PreviewImage image='https://images.adsttc.com/media/images/5be9/fd5c/08a5/e5a5/8c00/008f/newsletter/CARLES_FAUS_ARQUITECTURA_-_CARMEN_HOUSE_(2).jpg?1542061390' />
          </div>
          <div className={styles.buttons}>
            <Button value='Back' buttonClass='grayLightLinearButton' buttonType='button' handleClick={() => {Router.back()}}/>
            <Button value='Create post' buttonClass='greenButton' buttonType='submit' />
          </div>
        </Form>
      </div>
    </Layout>
  )
}

export default newPostStepFour;
