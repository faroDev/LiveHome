import React, { useState } from 'react';
import '../src/styles/global.sass';
import 'react-multi-carousel/lib/styles.css';
import UserContext from './../src/components/UserContext';

export default function MyApp ({ Component, pageProps }) {
  const [userData, setUserData] = useState(
    {
      userName: 'jrdiazr',
      userType: 'client',
      email: 'camposbj@hotmail.com',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjUsInVzZXJOYW1lIjoiamwiLCJlbWFpbCI6ImNhbXBvc2IxOTkwQGhvdG1haWwuY29tIiwidXNlclR5cGUiOiJDbGllbnRlIiwidXNlcklkIjo2LCJpYXQiOjE1OTAzNzI1NzMsImV4cCI6MTU5MDM3MzQ3M30.KOGKEyUoq0NQrE7kKGkXrMSWKVJiZVadDJmZm46oUHA',
      id: 5
    }
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={{ user: userData, setUserData, isLoggedIn, setIsLoggedIn }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}
