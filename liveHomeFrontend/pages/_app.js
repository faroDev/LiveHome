import React, { useState, useEffect } from 'react';
import '../src/styles/global.sass';
import UserContext from './../src/components/UserContext';
import decode from 'jwt-decode';
import verifySesion from './../src/utils/verifySession';

export default function MyApp ({ Component, pageProps }) {
  const [userData, setUserData] = useState(
    {
      userName: '',
      userType: '',
      email: '',
      token: '',
      id: null
    }
  );
  const [token, setToken] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    if (verifySesion()) {
      const token = window.sessionStorage.getItem('jwt-token');
      const payload = decode(token);
      setUserData({ ...payload });
      setIsLoggedIn(true);
      setToken(token);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, []);

  if (!isLoading) {
    return (
      <UserContext.Provider value={{ user: userData, setUserData, isLoggedIn, setIsLoggedIn, post, setPost, token, setToken }}>
        <Component {...pageProps} />
      </UserContext.Provider>
    );
  } else {
    return '';
  }
}
