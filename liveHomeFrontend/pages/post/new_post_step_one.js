import React, { useContext, useState, useEffect } from 'react';
import Router from 'next/router';
import decode from 'jwt-decode';

import setInputValue from '../../src/hooks/useInputValue';
import useRadioButtonValue from '../../src/hooks/useRadioButtonValue';

import API from '../../src/utils/api';
import verifySesion from '../../src/utils/verifySession';

import Layout from '../../src/components/Layout';
import Form from '../../src/components/Form';
import FormField from '../../src/components/FormField';
import Input from '../../src/components/Input';
import Select from '../../src/components/Select';
import RadioButton from '../../src/components/RadioButton';
import Button from '../../src/components/Button';
import Lightbox from '../../src/components/Lightbox';
import Loading from '../../src/components/Loading';
import UserContext from '../../src/components/UserContext';
import CustomError from '../../src/components/Error';

import styles from '../../src/styles/pages/post/new_post_step_one.module.sass';

const newPostStepOne = (props) => {
  const { zones, propertyTypes, modalityTypes, users } = props;

  const { offer, setOffer, token } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const title = setInputValue(offer.title || '');
  const rooms = setInputValue(offer.rooms || '');
  const bathrooms = setInputValue(offer.bathrooms || '');
  const address = setInputValue(offer.address || '');
  const m2 = setInputValue(offer.m2 || '');
  const m2build = setInputValue(offer.m2build || '');
  const price = setInputValue(offer.price || '');
  const propertyType = setInputValue(offer.propertyType || '');
  const zone = setInputValue(offer.zone || '');
  const modalityType = useRadioButtonValue(offer.modalityType || '');

  useEffect(() => {
    const user = decode(token);

    async function fetchData() {
      const users = await API.getCompleteUser(token, user.userId);

      if(!users.documentNumber) {
        window.alert('Please complete your profile');
        Router.push('/account');
      }

    }
    fetchData();
  }, [])

  useEffect(() => {
    setLoading(true);
    if (verifySesion()) {
      setLoading(false);
      const input = document.getElementById('google-input');
      if (window.google) {
        new window.google.maps.places.Autocomplete(input);
      } else {
        <CustomError error={new Error('There is an error, please try again')} />;
      }
    } else {
      Router.push('/login');
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = decode(token);

    setOffer({
      title: title.value,
      rooms: rooms.value,
      bathrooms: bathrooms.value,
      address: address.value,
      m2: m2.value,
      m2build: m2build.value,
      price: price.value,
      propertyType: propertyType.value,
      zone: zone.value,
      modalityType: modalityType.value,
      userId: user.userId
    });
    Router.push('/post/new_post_step_two');
  };

  if (zones.error || propertyTypes.error || modalityTypes.error) {
    return (
      <CustomError error={new Error('Excuse us')} />
    );
  } else {
    return (
      <>

        <Layout>
          <div className={styles.container}>
            <h1>New offer - step 1/3</h1>
            <Form onSubmit={handleSubmit}>
              <FormField>
                <Input type='text' label='Add title' name='title' required {...title} />
              </FormField>
              <FormField>
                <Select label='Property type' name='propertyType' options={propertyTypes.data} {...propertyType} />
              </FormField>
              <FormField>
                <Input type='text' label='Address' name='address' id='google-input' required {...address} />
              </FormField>
              <FormField>
                <Select label='Zone' name='zone' options={zones.data} {...zone} />
              </FormField>
              <FormField>
                <Input type='number' label='Area m2' name='m2' required {...m2} />
              </FormField>
              <FormField>
                <Input type='number' label='Built area m2' name='m2build' required {...m2build} />
              </FormField>
              <FormField>
                <Input type='number' label='Rooms' name='rooms' required {...rooms} />
              </FormField>
              <FormField>
                <Input type='number' label='Bathrooms' name='bathrooms' required {...bathrooms} />
              </FormField>
              <FormField>
                <Input type='number' label='Price' name='price' minValue='0' required {...price} />
              </FormField>
              <FormField>
                <RadioButton options={modalityTypes.data} title='Add type' name='modalityType' required {...modalityType} />
              </FormField>
              <div className={styles.buttons}>
                <Button value='Cancel' buttonClass='redLinearButton' buttonType='button' handleClick={() => { Router.push('/'); }} />
                <Button value='Continue' buttonClass='greenLinearButton' buttonType='submit' />
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
      </>
    );
  }
};

export async function getStaticProps () {
  const zones = await API.getZones();
  const propertyTypes = await API.getPropertyType();
  const modalityTypes = await API.getModalityType();

  return {
    props: {
      zones,
      propertyTypes,
      modalityTypes
    }
  };
}

export default newPostStepOne;
