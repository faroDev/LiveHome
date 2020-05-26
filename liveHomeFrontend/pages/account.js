import React, { useEffect, useContext, useState } from 'react';
import Layout from '../src/components/Layout';
import styles from '../src/styles/pages/account.module.sass';
import Input from '../src/components/Input';
import useInputValue from '../src/hooks/useInputValue';
import FormField from '../src/components/FormField';
import Form from '../src/components/Form';
import Selector from './../src/components/Select';
import Button from './../src/components/Button';
import UserContext from './../src/components/UserContext';
import API from './../src/utils/api';
import Loading from '../src/components/Loading';
import Error from './../src/components/Error';
import verifySesion from './../src/utils/verifySession';
import Router from 'next/router';

const account = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { user, token } = useContext(UserContext);
  const name = useInputValue('');
  const lastName = useInputValue('');
  const idType = useInputValue('');
  const id = useInputValue('');
  const phone = useInputValue('');
  const email = useInputValue('');
  const options = [{ value: 'CC', label: 'Cedula de Ciudadania' }, { value: 'NIT', label: 'Numero de Identificacion tributaria' }];

  useEffect(() => {
    setLoading(true);
    if (verifySesion()) {
      getData()
        .then(async ({ data, error }) => {
          if (!error) {
            name.setValue(data.name || '');
            lastName.setValue(`${data.lastName || ''} ${data.secondLastName || ''}`);
            idType.setValue(data.documentType || 'CC');
            id.setValue(data.documentNumber || '');
            phone.setValue(data.phone || '');
            email.setValue(user.email || 'camposb1990@hotmail.com');
          } else {
            setError(error);
          }
          setLoading(false);
        })
        .catch(error => { setError(error); });
    } else {
      window.alert('Your session finisshed');
      Router.push('/login');
    }
  }, []);

  const getData = async () => {
    return API.getAccount(user.userId, token);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const userData = {
      name: name.value,
      lastName: lastName.value,
      secondLastName: ' ',
      // documentType: idType.value,
      // documentNumber: id.value,
      // phone: phone.value,
      // email: email.value,
      status: true
    };

    setLoading(true);
    API.updateAccount(user.userId, token, userData)
      .then(({ data, error, message }) => {
        if (!error) {
          console.log(message);
        } else {
          setError(error);
        }
        setLoading(false);
      });
  };

  return (
    <Layout>

      <div className={styles.acount__container}>
        <h1>My account</h1>
        {
          loading && <Loading />
        }
        {
          error && <Error error={error} />
        }
        {
          !loading && !error &&
            <Form className={styles.form__account}>
              <FormField>
                <Input label='Name' type='text' name='name' required {...name} />
              </FormField>
              <FormField>
                <Input label='Last Name' type='text' name='name' required {...lastName} />
              </FormField>
              <FormField>
                <Selector label='ID Type' options={options} {...idType} />
              </FormField>
              <FormField>
                <Input label='ID' type='text' name='name' required {...id} />
              </FormField>
              <FormField>
                <Input label='Phone Number' type='text' name='name' required {...phone} />
              </FormField>
              <FormField>
                <Input label='Email' type='text' name='name' required {...email} disabled />
              </FormField>
              <FormField>
                <Button value='Update' buttonType='submit' buttonClass='greenButton' handleClick={handleUpdate} />
              </FormField>
            </Form>
        }
      </div>
    </Layout>
  );
};
export default account;
