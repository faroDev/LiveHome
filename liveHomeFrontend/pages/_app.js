import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import '../src/styles/global.sass';
import UserContext from './../src/components/UserContext';
import decode from 'jwt-decode';
import verifySesion from './../src/utils/verifySession';
import Head from 'next/head'

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
  const [offer, setOffer] = useState({});
  const [post, setPost] = useState([]);

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
      <>
        <Head>
          <script src="https://maps.google.com/maps/api/js?key=AIzaSyDwvwz-L38kItJd1lwwaP7sjtiTrtThwwg&libraries=places&language=es-419&components=country:co"></script>
        </Head>

        <UserContext.Provider value={{ user: userData, setUserData, isLoggedIn, setIsLoggedIn, post, setPost, offer, setOffer, token, setToken }}>
          <Component {...pageProps} />
        </UserContext.Provider>
      </>
    );
  } else {
    return '';
  }
}
