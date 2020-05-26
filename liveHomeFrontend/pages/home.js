import React from 'react';
import useInputValue from '../src/hooks/useInputValue';
import API from '../src/utils/api';

import Layout from '../src/components/Layout';
import Form from '../src/components/Form';
import FormField from '../src/components/FormField';
import Selector from '../src/components/Select';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

import styles from '../src/styles/pages/home.module.sass';

export const Home = ({ dataPropertyType }) => {
  const location = useInputValue('');

  return (
    <Layout>
      <div className={styles.home__container}>
        <Form>
          <FormField>
            <Selector label='Property type' options={dataPropertyType} />
          </FormField>
          <FormField>
            <Selector label='Rent / Sell' options={[]} />
          </FormField>
          <FormField>
            <Input label='Location (neighborhood / city)' type='text' required {...location} />
          </FormField>
          <FormField>
            <Button value='Search' buttonType='button' buttonClass='greenButton' />
          </FormField>
        </Form>
      </div>
    </Layout>
  );
};

// export default Home;

export default function getStaticProps ({query}) {

  const id = query.id;
  const { token } = JSON.parse(sessionStorage.getItem('userData'));

  const dataPropertyType = API.propertyType(token);
  
  return {
    props: {
      dataPropertyType,
    }
  }
}
