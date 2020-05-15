import React from 'react';
import useInputValue from '../src/hooks/useInputValue';

import Layout from '../src/components/Layout';
import Form from '../src/components/Form';
import FormField from '../src/components/FormField';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

import styles from '../src/styles/pages/register.module.sass';

const Register = () => {
  const email = useInputValue('');
  const password = useInputValue('');
  const repeatPassword = useInputValue('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email.value}, Password: ${password.value}, RePassword: ${repeatPassword.value}`);
  };

  return (
    <Layout>
      <div className={styles.register__container}>
        <h3>Register</h3>
        <Form onSubmit={handleSubmit}>
          <FormField>
            <Input type='email' label='Email' {...email} required={true} name='email'/>
          </FormField>
          <FormField>
            <Input type='password' label='Password' {...password} required={true} name='password'/>
          </FormField>
          <FormField>
            <Input type='password' label='Repeat password' {...repeatPassword} required={true} name='repeatpassword'/>
          </FormField>
          <FormField>
            <Button value='Sign up' buttonType='submit' buttonClass='greenButton'/>
          </FormField>
        </Form>
      </div>
    </Layout>
  );
};

export default Register;