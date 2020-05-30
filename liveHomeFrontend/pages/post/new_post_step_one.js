import React, { useContext } from 'react';
import Router from 'next/router';

import setInputValue from '../../src/hooks/useInputValue';
import useRadioButtonValue from '../../src/hooks/useRadioButtonValue';

import Layout from '../../src/components/Layout';
import Form from '../../src/components/Form';
import FormField from '../../src/components/FormField';
import Input from '../../src/components/Input';
import Select from '../../src/components/Select';
import RadioButton from '../../src/components/RadioButton';
import Button from '../../src/components/Button';
import UserContext from '../../src/components/UserContext';

import styles from '../../src/styles/pages/post/new_post_step_one.module.sass';

const newPostStepOne = () => {
  const { post, setPost } = useContext(UserContext);

  const title = setInputValue(post.title || '');
  const rooms = setInputValue(post.rooms || '');
  const bathrooms = setInputValue(post.bathrooms || '');
  const address = setInputValue(post.address || '');
  const m2 = setInputValue(post.m2 || '');
  const m2build = setInputValue(post.m2build || '');
  const price = setInputValue(post.price || '');
  const property_type = [
    {
      value: '1',
      label: 'Casa'
    },
    {
      value: '2',
      label: 'Apartamento'
    },
    {
      value: '3',
      label: 'Oficina'
    },
    {
      value: '4',
      label: 'Estudio'
    }
  ];
  const add_type = useRadioButtonValue(post.add_type || '');

  const handleSubmit = (event) => {
    event.preventDefault();
    setPost({
      title: title.value,
      rooms: rooms.value,
      bathrooms: bathrooms.value,
      address: address.value,
      m2: m2.value,
      m2build: m2build.value,
      price: price.value,
      add_type: add_type.value
    });
    Router.push('/post/new_post_step_two');
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h1>New offer - step 1/3</h1>
        <Form onSubmit={handleSubmit}>
          <FormField>
            <Input type='text' label='Add title' name='title' required {...title} />
          </FormField>
          <FormField>
            <Select label='Property type' options={property_type} />
          </FormField>
          <FormField>
            <Input type='number' label='Rooms' name='rooms' required {...rooms} />
          </FormField>
          <FormField>
            <Input type='number' label='Bathrooms' name='bathrooms' required {...bathrooms} />
          </FormField>
          <FormField>
            <Input type='text' label='Address' name='address' required {...address} />
          </FormField>
          <FormField>
            <Input type='number' label='Area m2' name='m2' required {...m2} />
          </FormField>
          <FormField>
            <Input type='number' label='Built area m2' name='m2build' required {...m2build} />
          </FormField>
          <FormField>
            <Input type='text' label='Price' name='price' required {...price} />
          </FormField>
          <FormField>
            <RadioButton options={['Rent', 'Sell']} name='add_type' title='Add type' {...add_type} />
          </FormField>
          <div className={styles.buttons}>
            <Button value='Cancel' buttonClass='redLinearButton' buttonType='button' handleClick={() => { Router.push('/'); }} />
            <Button value='Continue' buttonClass='greenLinearButton' buttonType='submit' />
          </div>
        </Form>
      </div>
    </Layout>
  );
};

export default newPostStepOne;