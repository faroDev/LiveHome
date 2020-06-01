import React, { useState } from 'react';
import Router from 'next/router';
import useInputValue from '../src/hooks/useInputValue';
import API from '../src/utils/api';

import Layout from '../src/components/Layout';
import Form from '../src/components/Form';
import FormField from '../src/components/FormField';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Loading from '../src/components/Loading';
import Error from '../src/components/Error';
import AlertField from '../src/components/AlertField';

import styles from '../src/styles/pages/register.module.sass';

const Register = () => {
  const email = useInputValue('');
  const password = useInputValue('');
  const repeatPassword = useInputValue('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const data = { email: email.value, password: password.value, userName: email.value };

    try {
      const response = await API.signUp(data);
      setLoading(false);
      if (response.data.id > 0) {
        Router.push('/login');
      }
    } catch (error) {
      console.error('[error]', error);
      setLoading(false);
      setError(error);
    }
  };

  const passwordValidate = () => {
    if (password.value === repeatPassword.value) {
      return false;
    }
    return true;
  };

  return (
    <Layout>
      <div className={styles.register__container}>
        <h3>Register</h3>
        {
          loading && <Loading />
        }
        {
          error && <Error error={error} />
        }
        {
          !loading && !error &&
            <Form onSubmit={handleSubmit}>
              <FormField>
                <Input type='email' label='Email' {...email} required name='email' />
              </FormField>
              <FormField>
                <Input type='password' label='Password' {...password} required name='password' />
              </FormField>
              <FormField>
                <Input type='password' label='Repeat password' {...repeatPassword} required name='repeatpassword' />
                {
                  passwordValidate() &&
                    <AlertField message={'Fields password and repeat password isn\'t equals, please check values'} />
                }
              </FormField>
              <FormField>
                <Button value='Sign up' buttonType='submit' buttonClass='greenButton' disabled={passwordValidate()} />
              </FormField>
            </Form>
        }
      </div>
    </Layout>
  );
};

export default Register;
