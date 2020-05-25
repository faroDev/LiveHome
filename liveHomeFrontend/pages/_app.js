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
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJOYW1lIjoiamwiLCJlbWFpbCI6ImNhbXBvc2JqQGhvdG1haWwuY29tIiwiaWF0IjoxNTkwMzQ0MTE1LCJleHAiOjE1OTAzNDUwMTV9.qfWfWUqTbDhyIuvc7MlDjl6TwKn4bwoliOc18OkBvpk',
      id: 10
    }
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={{ user: userData, setUserData, isLoggedIn, setIsLoggedIn }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}
