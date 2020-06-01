import React, { useState, useContext, useEffect } from 'react';
import Router from 'next/router';
import useInputValue from '../src/hooks/useInputValue';
import API from '../src/utils/api';
import UserContext from '../src/components/UserContext';

import Layout from '../src/components/Layout';
import Form from '../src/components/Form';
import FormField from '../src/components/FormField';
import Selector from '../src/components/Select';
import Button from '../src/components/Button';
import Loading from '../src/components/Loading';
import Error from '../src/components/Error';

import styles from '../src/styles/pages/home.module.sass';

const Home = ({dataPropertyType, dataModalityType, dataZones}) => {
  
  const { user,setPost } = useContext(UserContext);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  
  const zoneId = useInputValue();
  const propertyTypeId = useInputValue();
  const modalityTypeId = useInputValue();
  
  useEffect ( () => {
    const paramsSession = sessionStorage.getItem('paramsQuery');

    if ( paramsSession ){
      const params = JSON.parse(paramsSession);
      if ( Object.keys(params).length > 0 ){
        zoneId.setValue(params.zoneId);
        propertyTypeId.setValue(params.propertyTypeId);
        modalityTypeId.setValue(params.modalityTypeId);
        sessionStorage.removeItem('paramsQuery');
      }
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await API.getPropertyHome(propertyTypeId.value, modalityTypeId.value, zoneId.value, user.userId);
      setLoading(false);
      setPost(response.data);

      const paramsQuery = {propertyTypeId: propertyTypeId.value, modalityTypeId: modalityTypeId.value, zoneId: zoneId.value};
      sessionStorage.setItem('paramsQuery', JSON.stringify(paramsQuery));
      Router.push('/property/buildings');
    } catch (error) {
      console.error('[error]', error);
      setLoading(false);
      setError(error);
    }
  };

  const validateButton = () => {
    if (zoneId.value === undefined || loading){
      return true
    }
    return false;
  };

  return (
    <Layout>
      <div className={styles.home__container}>
        {
          error && <Error error={error} />
        }
        { !error && 
          <Form onSubmit={handleSubmit}>
            <FormField>
              <Selector label='Property type' options={ dataPropertyType.data } {...propertyTypeId} />
            </FormField>
            <FormField>
              <Selector label='Rent / Sell' options={ dataModalityType.data } {...modalityTypeId} />
            </FormField>
            <FormField>
              <Selector label='Zone / location' options={ dataZones.data } {...zoneId} />
            </FormField>
            <FormField>
              <Button value='Search' buttonType='submit' buttonClass='greenButton' disabled={validateButton()} />
            </FormField>
          </Form>
        }
      </div>
      {
        loading && <Loading />
      }
    </Layout>
  );
};

export async function getStaticProps () {

  const dataPropertyType = await API.getPropertyType();
  const dataModalityType = await API.getModalityType();
  const dataZones = await API.getZones();
  
  return {
    props: {
      dataPropertyType,
      dataModalityType,
      dataZones
    }
  }
}

export default Home;