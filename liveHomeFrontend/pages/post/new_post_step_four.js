import React, { useContext } from 'react';
import Router from 'next/router';

import setInputValue from '../../src/hooks/useInputValue';

import Layout from '../../src/components/Layout';
import Form from '../../src/components/Form';
import FormField from '../../src/components/FormField';
import TextAreaComponent from '../../src/components/TextAreaComponent';
import PreviewImage from '../../src/components/PreviewImage';
import Button from '../../src/components/Button';
import UserContext from '../../src/components/UserContext';

import API from '../../src/utils/api';

import styles from '../../src/styles/pages/post/new_post_step_four.module.sass';

const newPostStepFour = () => {
  const { post, setPost } = useContext(UserContext);

  const description = setInputValue(post.description || '');

  const saveProperty = async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJOYW1lIjoiamwiLCJlbWFpbCI6ImNhbXBvc2IxOTkwQGhvdG1haWwuY29tIiwidXNlclR5cGUiOiJDbGllbnRlIiwidXNlcklkIjoxLCJpYXQiOjE1OTA1NTY2NDQsImV4cCI6MTU5MDU1NzU0NH0.qrzpiO7ZFMZSzxY0A2fB96j6Pa1v2tXm1wL-UwJ_pk0';
    const result = await API.postProperty(token, post)
      .then((res) => res)
      .catch((error) => new Error(error.message));

    console.log(result);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPost({
      ...post,
      description: description.value
    });
    saveProperty();
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h1>Media - step 4/4</h1>
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
    </Layout>
  );
};

export default newPostStepFour;
