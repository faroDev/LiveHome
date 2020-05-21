import React from 'react';
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

import styles from '../../src/styles/pages/post/new_post_step_three.module.sass';

const newPostStepThree = () => {

  const furnished = useCheckValue('');
  const elevator = useCheckValue('');
  const pool = useCheckValue('');
  const heating = useCheckValue('');
  const security = useCheckValue('');
  const warehouse = useCheckValue('');
  const parking = setInputValue('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('entró');
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
            <Input type='number' label='Parkig' name='parkng' required={true} {...parking} />
          </FormField>
          <FormField>
            <Textarea label='Nearby places' name='nearby_places' />
          </FormField>
          <div className={styles.buttons}>
            <Button value='Back' buttonClass='grayLightLinearButton' buttonType='button' handleClick={() => {Router.push('/')}}/>
            <Button value='Continue' buttonClass='greenLinearButton' buttonType='submit' />
          </div>
        </Form>
      </div>
    </Layout>
  )
}

export default newPostStepThree;
