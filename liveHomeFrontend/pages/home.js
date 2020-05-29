import React, { useEffect } from 'react';
import useInputValue from '../src/hooks/useInputValue';
import API from '../src/utils/api';

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

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await API.getPropertyHome(propertyType.value, modalityType.value);
      setLoading(false);
      // if (response.data.id > 0) {
      //   Router.push('/login');
      // }
    } catch (error) {
      console.error('[error]', error);
      setLoading(false);
      setError(error);
    }
  }

  const location = useInputValue('');
  const propertyType = useInputValue('');
  const modalityType = useInputValue('');

  const dataSelectorProperty = dataPropertyType.data.map( (item)=> ({value: item.id, label: item.name}));
  const dataSelectorModality = dataModalityType.data.map( (item)=> ({value: item.id, label: item.name}));

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
              <Button value='Search' buttonType='button' buttonClass='greenButton' disabled={loading} />
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
