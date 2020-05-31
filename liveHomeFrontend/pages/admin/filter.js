import React, { useState, useContext, useEffect } from 'react';
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
import Loading from '../../src/components/Loading';
import Error from './../../src/components/Error';
import UserContext from '../../src/components/UserContext';
import Router from 'next/router';
import verifySesion from './../../src/utils/verifySession';

const filter = ({ dataPropertyType, dataZones, dataStatuses }) => {
  const { user, setPost } = useContext(UserContext);
  const zoneId = useInputValue(1);
  const propertyTypeId = useInputValue();
  const statusId = useInputValue();
  const dateFrom = useInputValue();
  const dateTo = useInputValue();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  if (!verifySesion()) {
    window.alert('Your session finisshed');
    Router.push('/login');
  }

  console.log(user);

  useEffect(() => {
    if (user.userType !== 'Admin') {
      setError({ message: 'You must have admin profile to view this page' });
    }
  }, []);

  const handleFilter = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await api.getPropertyAdmin(propertyTypeId.value, statusId.value, zoneId.value, dateFrom.value, dateTo.value, user.userId);
      setLoading(false);
      setPost(response.data);

      const paramsQuery = { propertyTypeId: propertyTypeId.value, statusId: statusId.value, zoneId: zoneId.value };
      sessionStorage.setItem('paramsQuery', JSON.stringify(paramsQuery));
      Router.push('/admin/home');
    } catch (error) {
      console.error('[error]', error);
      setLoading(false);
      setError(error);
    }
  };

  const validateButton = () => {
    if (zoneId.value === undefined || loading) {
      return true;
    }
    return false;
  };

  return (
    <Layout>
      <div className={styles.__container}>
        <h1>Filter</h1>
        <CloseButton />
        {
          loading && <Loading />
        }
        {
          error && <Error error={error} />
        }
        {
          !loading && !error &&
            <Form>
              <FormField>
                <Selector label='Property Type' options={dataPropertyType.data} {...propertyTypeId} />
              </FormField>
              <FormField>
                <Selector label='Zone / location' options={dataZones.data} {...zoneId} />
              </FormField>
              <FormField>
                <Selector label='Approve / Pending' options={dataStatuses.data} {...statusId} />
              </FormField>
              <div className={styles.__date_select}>
                <Input label='Date from' type='date' name='location' required {...dateFrom} />
                <Input label='Date to' type='date' name='location' required {...dateTo} />
              </div>
              <FormField>
                <Button value='Filter' buttonType='submit' buttonClass='grayButton' handleClick={handleFilter} disabled={validateButton()} />
              </FormField>
            </Form>
        }
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
