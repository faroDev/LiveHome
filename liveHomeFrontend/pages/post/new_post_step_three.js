import React, { useState, useContext } from 'react';
import Router from 'next/router';

import setInputValue from '../../src/hooks/useInputValue';

import Layout from '../../src/components/Layout';
import Form from '../../src/components/Form';
import FormField from '../../src/components/FormField';
import TextAreaComponent from '../../src/components/TextAreaComponent';
import PreviewImage from '../../src/components/PreviewImage';
import Button from '../../src/components/Button';
import Lightbox from '../../src/components/Lightbox';
import Error from '../../src/components/Error';
import Loading from '../../src/components/Loading';
import UserContext from '../../src/components/UserContext';

import API from '../../src/utils/api';

import styles from '../../src/styles/pages/post/new_post_step_three.module.sass';

const newPostStepThree = () => {
  const { offer, setOffer } = useContext(UserContext);

  const description = setInputValue('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMsInVzZXJOYW1lIjoiamwiLCJlbWFpbCI6ImNhbXBvc2IxOTkxQGhvdG1haWwuY29tIiwidXNlclR5cGUiOiJDbGllbnRlIiwidXNlcklkIjozLCJpYXQiOjE1OTA5NDMxOTUsImV4cCI6MTU5MDk0NDA5NX0.dwGZWtCmIJu_EtuqhKBZ2Rk8rHQ-Uv_rBFz6wjxpXbc';

    const newPost = { ...offer, description: description.value };

    const property = await API.postProperty(token, newPost);
    console.log(property);
    if (property.error) {
      setError(property);
      setLoading(false);
      return;
    }
    const modality = await API.postModality(token, property.data, newPost.price, newPost.modalityType);
    // Validar si no tiene ID
    console.log(modality);
    const details = await API.postPropertyDetails(token, newPost, property.data.id)
    console.log(details);
  }

  if (error) {
    return (
      <Lightbox>
        <Error error={error} />
      </Lightbox>
    )
  }

  return (
    <Layout>
      <div className={styles.container}>
        <h1>Media - step 3/3</h1>
        <Form onSubmit={handleSubmit}>
          <FormField>
            <TextAreaComponent label='Description' name='description' required {...description} />
            <span className={styles.info}>Max. 6 photos and 1 video</span>
          </FormField>
          <FormField>
            <Button value='Upload image' buttonClass='redLinearButton' buttonType='button' />
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
            <Button value='Back' buttonClass='grayLightLinearButton' buttonType='button' handleClick={() => { Router.back(); }} />
            <Button value='Create post' buttonClass='greenButton' buttonType='button' handleClick={(e) => handleSubmit(e)} />
          </div>
        </Form>
      </div>

      {
        loading && 
        <Lightbox>
          <Loading />
        </Lightbox>
      }

    </Layout>
  );
};

export default newPostStepThree;
