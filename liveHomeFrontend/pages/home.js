import React, { useState, useContext } from 'react';
import Router from 'next/router';
import useInputValue from '../src/hooks/useInputValue';
import API from '../src/utils/api';
import UserContext from '../src/components/UserContext';

import Layout from '../src/components/Layout';
import Form from '../src/components/Form';
import FormField from '../src/components/FormField';
import Selector from '../src/components/Select';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Loading from '../src/components/Loading';
import Error from '../src/components/Error';

import styles from '../src/styles/pages/home.module.sass';

const Home = ({dataPropertyType, dataModalityType}) => {

  const { setPost } = useContext(UserContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const location = useInputValue('');
  const propertyType = useInputValue(0);
  const modalityType = useInputValue(0);

  const dataSelectorProperty = dataPropertyType.data.map( (item)=> ({value: item.id, label: item.name}));
  const dataSelectorModality = dataModalityType.data.map( (item)=> ({value: item.id, label: item.name}));

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await API.getPropertyHome(propertyType.value, modalityType.value, location.value);
      setLoading(false);
      setPost(response.data);
      Router.push('/property/buildings');
    } catch (error) {
      console.error('[error]', error);
      setLoading(false);
      setError(error);
    }
  };

  const validateButton = () => {
    // if (modalityType.value === 0 || location.value === '' || loading){
    if (modalityType.value === 0 || loading){
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
              <Selector label='Property type' options={ dataSelectorProperty || []} {...propertyType} />
            </FormField>
            <FormField>
              <Selector label='Rent / Sell' options={ dataSelectorModality || []} {...modalityType} />
            </FormField>
            <FormField>
              <Input label='Location (neighborhood / city)' type='text' required {...location} />
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
  
  return {
    props: {
      dataPropertyType,
      dataModalityType
    }
  }
}

export default Home;
