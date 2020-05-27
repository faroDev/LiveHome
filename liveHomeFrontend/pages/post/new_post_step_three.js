import React, {useContext} from 'react';
import Router from 'next/router';

import setInputValue from '../../src/hooks/useInputValue';
import useCheckValue from './../../src/hooks/useCheckValue';

import Layout from '../../src/components/Layout';
import Form from '../../src/components/Form';
import FormField from '../../src/components/FormField';
import Checkbox from '../../src/components/Checkbox';
import Input from '../../src/components/Input';
import Textarea from '../../src/components/Textarea';
import Button from '../../src/components/Button';
import UserContext from '../../src/components/UserContext';

import styles from '../../src/styles/pages/post/new_post_step_three.module.sass';

const newPostStepThree = () => {
  const {post, setPost} = useContext(UserContext);

  const furnished = useCheckValue(post.furnished || false);
  const elevator = useCheckValue(post.elevator || false);
  const pool = useCheckValue(post.pool || false);
  const heating = useCheckValue(post.heating || false);
  const security = useCheckValue(post.security || false);
  const warehouse = useCheckValue(post.warehouse || false);
  const parking = setInputValue(post.parking || '');
  const nearby_places = setInputValue(post.nearby_places || '');

  const handleSubmit = (event) => {
    event.preventDefault();
    setPost({
      ...post,
      furnished: furnished.checked,
      elevator: elevator.checked,
      pool: pool.checked,
      heating: heating.checked,
      security: security.checked,
      warehouse: warehouse.checked,
      parking: parking.value,
      nearby_places: nearby_places.value,
    })
    Router.push('/post/new_post_step_four')
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h1>Options - step 3/4</h1>
        <Form onSubmit={handleSubmit}>
          <FormField>
            <Checkbox name='furnished' {...furnished} text='Furnished' />
          </FormField>
          <FormField>
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
            <Textarea label='Nearby places' name='nearby_places' required={true} {...nearby_places} />
          </FormField>
          <div className={styles.buttons}>
            <Button value='Back' buttonClass='grayLightLinearButton' buttonType='button' handleClick={() => {Router.back()}} />
            <Button value='Continue' buttonClass='greenLinearButton' buttonType='submit' />
          </div>
        </Form>
      </div>
    </Layout>
  );
};

export default newPostStepThree;
