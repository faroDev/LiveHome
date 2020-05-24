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
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJOYW1lIjoiamwiLCJlbWFpbCI6ImNhbXBvc2JqQGhvdG1haWwuY29tIiwiaWF0IjoxNTkwMjg4MzgwLCJleHAiOjE1OTAyODkyODB9.fpUQMLXACwI60AY-XYsctjVOuOoUBM96H8k58fh7wC4',
      id: 1
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
