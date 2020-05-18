import React from 'react';
import Layout from '../../src/components/Layout';
import styles from '../../src/styles/pages/admin/filter.module.sass';
import CloseButton from './../../src/components/CloseButton';
import Form from '../../src/components/Form';
import FormField from '../../src/components/FormField';
import Input from './../../src/components/Input';
import useInputValue from './../../src/hooks/useInputValue';
import Selector from '../../src/components/Selector';
import Button from '../../src/components/Button';

const filter = () => {
  const location = useInputValue('');
  const propertyTypes = [{ value: 1, label: 'Apartment' }, { value: 2, label: 'House' }, { value: 3, label: 'Building' }];
  const statusTypes = [{ value: 1, label: 'Approved' }, { value: 2, label: 'Pending' }, { value: 3, label: 'Denied' }];
  return (
    <Layout>
      <div className={styles.__container}>
        <h1>Filter</h1>
        <CloseButton />
        <Form>
          <FormField>
            <Selector label='Property Type' options={propertyTypes} />
          </FormField>
          <FormField>
            <Input label='Location' type='text' name='location' required {...location} />
          </FormField>
          <FormField>
            <Selector label='Approve / Pending' options={statusTypes} />
          </FormField>
          <div className={styles.__date_select}>
            <Input label='Date from' type='date' name='location' required {...location} />
            <Input label='Date to' type='date' name='location' required {...location} />
          </div>
          <FormField>
            <Button value='Filter' buttonType='submit' buttonClass='grayButton' />
          </FormField>
        </Form>
      </div>
    </Layout>
  );
};

export default filter;
