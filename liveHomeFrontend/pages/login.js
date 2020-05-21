import React from 'react';
import Link from 'next/link';

import setInputValue from '../src/hooks/useInputValue';

import Layout from '../src/components/Layout';
import Form from '../src/components/Form';
import FormField from '../src/components/FormField';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

import LogoImage from '../src/assets/statics/images/LiveHome-logo.png';

import styles from '../src/styles/pages/login.module.sass';

const Login = () => {

  const email = setInputValue('');
  const password = setInputValue('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email.value}, Password: ${password.value}`);
  };

  return (
    <Layout>
      <div className={styles.login__container}>
        <div className={styles.login__container_img}>
          <img src={LogoImage} alt='Logo live home' />
        </div>
        <Form onChange={handleSubmit}>
          <FormField>
            <Input type='email' label='email' name='email' required={true} {...email} />
          </FormField>
          <FormField>
            <Input type='password' label='password' name='password' required={true} {...password} />
          </FormField>
          <FormField>
            <Button buttonClass='purpleButton' buttonType='submit' value='Login'/>
          </FormField>
        </Form>
        <div className={styles.login__container_info}>
          <p>You do not have an account? <Link href='/register'><a>Register</a></Link></p>
        </div>
      </div>
    </Layout>
  );
};

export default Login;