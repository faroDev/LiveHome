import React from 'react';
import Router from 'next/router';

import setInputValue from '../../src/hooks/useInputValue';

import Layout from '../../src/components/Layout';
import Form from '../../src/components/Form';
import FormField from '../../src/components/FormField';
import Input from '../../src/components/Input';
import Select from '../../src/components/Select';
import RadioButton from '../../src/components/RadioButton';
import Button from '../../src/components/Button';

import styles from '../../src/styles/pages/post/new_post_step_one.module.sass';

const newPostStepOne = () => {

  const title = setInputValue('');
  const rooms = setInputValue('');
  const bathrooms = setInputValue('');
  const address = setInputValue('');
  const area = setInputValue('');
  const price = setInputValue('');
  const property_type = [
    {
      value: 'casa',
      label: 'Casa',
    },
    {
      value: 'apartamento',
      label: 'Apartamento',
    },
    {
      value: 'oficina',
      label: 'Oficina',
    },
    {
      value: 'estudio',
      label: 'Estudio',
    }
  ]

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('entró');
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h1>New post - step 1/4</h1>
        <Form onSubmit={handleSubmit}>
          <FormField>
            <Input type='text' label='Add title' name='title' required={true} {...title} />
          </FormField>
          <FormField>
            <Select label='Property type' options={property_type} />
          </FormField>
          <FormField>
            <Input type='number' label='Rooms' name='rooms' required={true} {...rooms} />
          </FormField>
          <FormField>
            <Input type='number' label='Bathrooms' name='bathrooms' required={true} {...bathrooms} />
          </FormField>
          <FormField>
            <Input type='text' label='Address' name='address' required={true} {...address} />
          </FormField>
          <FormField>
            <Input type='text' label='Area' name='area' required={true} {...area} />
          </FormField>
          <FormField>
            <Input type='text' label='Price' name='price' required={true} {...price} />
          </FormField>
          <FormField>
            <RadioButton options={['Rent', 'Sell']} name='add_type' title='Add type'/>
          </FormField>
          <div className={styles.buttons}>
            <Button value='Cancel' buttonClass='redLinearButton' buttonType='button' handleClick={() => {Router.push('/')}}/>
            <Button value='Continue' buttonClass='greenLinearButton' buttonType='submit' />
          </div>
        </Form>
      </div>
    </Layout>
  )
}

export default newPostStepOne;
