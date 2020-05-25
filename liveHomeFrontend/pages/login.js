import React, { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import API from '../src/utils/api';
import UserContext from '../src/components/UserContext';

import useInputValue from '../src/hooks/useInputValue';

import Layout from '../src/components/Layout';
import Form from '../src/components/Form';
import FormField from '../src/components/FormField';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Loading from '../src/components/Loading';
import Error from '../src/components/Error';
import AlertField from '../src/components/AlertField';

import LogoImage from '../src/assets/statics/images/LiveHome-logo.png';

import styles from '../src/styles/pages/login.module.sass';

const Login = () => {

  const { setUserData, setIsLoggedIn } = useContext(UserContext);

  useEffect( ()=>{
    if ( sessionStorage.getItem('isLoggedIn')){
      Router.push('/home');
    }
  },[])

  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState();
  const [ alert, setAlert ] = useState(false); 

  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setAlert(false);
    const userData = { userName: email.value, password: password.value};
    const response = await API.signIn(userData);

    try {
      if (response.statusCode === 401){
        setAlert(true);
        setLoading(false);
        return false;
      }
      
      const userData = { 
        ...response.user,
        token: response.token
      }
      console.log('[Login-ok]', response);
      setUserData(userData);
      setIsLoggedIn(true);
      sessionStorage.setItem('isLoggedIn', true);
      sessionStorage.setItem('userData', JSON.stringify(userData));
      setAlert(false);
      setLoading(false);
      Router.push('/account');
     
    } catch (error) {
      console.error('[error]', error);
      setLoading(false);
      setError(error);
    }
  };

  return (
    <Layout>
      {
        error && <Error error={error} />
      }
      {
        !error && 
        <div className={styles.login__container}>
          <div className={styles.login__container_img}>
            <img src={LogoImage} alt='Logo live home' />
          </div>
          <Form onSubmit={handleSubmit}>
            <FormField>
              <Input type='email' label='email' name='email' required={true} {...email} />
            </FormField>
            <FormField>
              <Input type='password' label='password' name='password' required={true} {...password} />
            </FormField>
            <FormField>
              <Button buttonClass='purpleButton' buttonType='submit' value='Login' disabled={loading}/>
              {
                alert && <AlertField message='user or password incorrect!' />
              }
            </FormField>
          </Form>
          <div className={styles.login__container_info}>
            <p>You do not have an account? <Link href='/register'><a>Register</a></Link></p>
          </div>
          { loading && <Loading /> }
        </div>
      }
    </Layout>
  );
};

export default Login;