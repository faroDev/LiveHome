import React, { useState } from 'react';
import '../src/styles/global.sass';
import 'react-multi-carousel/lib/styles.css';
import UserContext from './../src/components/UserContext';

export default function MyApp ({ Component, pageProps }) {
  const [userData, setUserData] = useState(
    {
      userName: '',
      userType: '',
      email: '',
      token: '',
      id: 0
    }
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [post, setPost] = useState({});

  return (
    <UserContext.Provider value={{ user: userData, setUserData, isLoggedIn, setIsLoggedIn, post, setPost }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}
