import React from 'react';
import useInputValue from '../src/hooks/useInputValue';

import Layout from '../src/components/Layout';
import Form from '../src/components/Form';
import FormField from '../src/components/FormField';
import Selector from '../src/components/Selector';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

import styles from '../src/styles/pages/home.module.sass';

const Home = () => {

  const location = useInputValue('');

  return (
    <Layout>
      <div className={styles.home__container}>
        <Form>
          <FormField>
            <Selector label='Property type' options={[]} />
          </FormField>
          <FormField>
            <Selector label='Rent / Sell' options={[]} />
          </FormField>
          <FormField>
            <Input label='Location (neighborhood / city)' type='text' required={true} {...location} />
          </FormField>
          <FormField>
            <Button value='Search' buttonType='button' buttonClass='greenButton' />
          </FormField>
        </Form>
      </div>
    </Layout>
  );
};

export default Home;