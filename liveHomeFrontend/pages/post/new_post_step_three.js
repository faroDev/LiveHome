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

import styles from '../../src/styles/pages/post/new_post_step_three.module.sass';

const newPostStepThree = () => {
  const { post, setPost } = useContext(UserContext);

  const description = setInputValue(post.description || '');

  const saveProperty = async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJOYW1lIjoiamwiLCJlbWFpbCI6ImNhbXBvc2IxOTkwQGhvdG1haWwuY29tIiwidXNlclR5cGUiOiJDbGllbnRlIiwidXNlcklkIjoxLCJpYXQiOjE1OTA4MDc5MzgsImV4cCI6MTU5MDgwODgzOH0.QS9TFAq_hZWrqRSDd0eHsknsTpfok5_q3F0HUgfr1MY';
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
        <h1>Media - step 3/3</h1>
        <Form onSubmit={handleSubmit}>
          <FormField>
            <TextAreaComponent label='Description' name='description' required {...description} />
            <span className={styles.info}>Max. 6 photos and 1 video</span>
          </FormField>
          <FormField>
<<<<<<< HEAD
            <Checkbox name='elevator' {...elevator} text='Elevator' />
          </FormField>
          <FormField>
            <Checkbox name='pool' {...pool} text='Swimming pool' />
          </FormField>
          <FormField>
            <Checkbox name='heating' {...heating} text='Heating' />
          </FormField>
          <FormField>
            <Checkbox name='security' {...security} text='Security service' />
          </FormField>
          <FormField>
            <Checkbox name='warehouse' {...warehouse} text='Warehouse' />
          </FormField>
          <FormField>
            <Input type='number' label='Parkig' name='parkng' required {...parking} />
          </FormField>
          <FormField>
            <TextareaComponent label='Nearby places' name='nearby_places' required {...nearby_places} />
=======
            <Button value='Upload image' buttonClass='redLinearButton' buttonType='button' />
>>>>>>> d2f69daabf5b48393cd4c92cd2e6ba3fc4607133
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
<<<<<<< HEAD
            <Button value='Continue' buttonClass='greenLinearButton' buttonType='submit' />
=======
            <Button value='Create post' buttonClass='greenButton' buttonType='button' handleClick={(e) => handleSubmit(e)} />
>>>>>>> d2f69daabf5b48393cd4c92cd2e6ba3fc4607133
          </div>
        </Form>
      </div>
    </Layout>
  );
};

export default newPostStepThree;
