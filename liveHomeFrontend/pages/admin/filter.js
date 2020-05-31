import React from 'react';
import Layout from '../../src/components/Layout';
import styles from '../../src/styles/pages/admin/filter.module.sass';
import CloseButton from './../../src/components/CloseButton';
import Form from '../../src/components/Form';
import FormField from '../../src/components/FormField';
import Input from './../../src/components/Input';
import useInputValue from './../../src/hooks/useInputValue';
import Selector from '../../src/components/Select';
import Button from '../../src/components/Button';
import api from '../../src/utils/api';

const filter = ({ dataPropertyType, dataZones, dataStatuses }) => {
  console.log('type', dataStatuses);

  const location = useInputValue('');

  return (
    <Layout>
      <div className={styles.__container}>
        <h1>Filter</h1>
        <CloseButton />
        <Form>
          <FormField>
            <Selector label='Property Type' options={dataPropertyType.data} />
          </FormField>
          <FormField>
            <Selector label='Zone / location' options={dataZones.data} />
          </FormField>
          <FormField>
            <Selector label='Approve / Pending' options={dataStatuses.data} />
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

export async function getStaticProps () {
  const dataPropertyType = await api.getPropertyType();
  const dataZones = await api.getZones();
  const dataStatuses = await api.getStatuses();

  return {
    props: {
      dataPropertyType,
      dataZones,
      dataStatuses
    }
  };
}

export default filter;
