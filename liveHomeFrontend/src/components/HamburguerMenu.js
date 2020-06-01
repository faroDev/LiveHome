import React, { useContext, useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import FeatherIcon from 'feather-icons-react';
import styles from '../styles/components/HamburguerMenu.module.sass';
import Button from './Button';
import UserContext from './UserContext';

const HamburguerMenu = () => {
  const { isLoggedIn, setIsLoggedIn, setUserData, setToken } = useContext(UserContext);
  const [isActive, setIsActive] = useState(false);

  const logOut = () => {
    setIsLoggedIn(false);
    setIsActive(false);
    setUserData({});
    setToken('');
    window.sessionStorage.removeItem('jwt-token');
    window.alert('Your Session finished');
    Router.push('/login');
  };

  return (
    <nav className={styles.burgerMenu}>
      {isActive ? (
        <FeatherIcon icon='x' size={20} stroke='#4424A6' onClick={() => setIsActive(false)} />
      ) : (
        <FeatherIcon
          icon='menu'
          className={styles.burguerIcon}
          size={70}
          stroke='#4424A6'
          onClick={() => setIsActive(true)}
        />
      )}
      {isActive && (
        <ul className={styles.list}>
          {isLoggedIn ? (
            <>
              <li>
                <Button value='Publish a property' buttonType='button' buttonClass='redLinearButton' handleClick={() => {Router.push('/post/new_post_step_one')}}/>
              </li>
              <li className={styles.link}>
                <Link href='/account'>
                  <a>My account</a>
                </Link>
              </li>
              <li className={styles.link}>
                <Link href='/favourites'>
                  <a>My favourites</a>
                </Link>
              </li>
              <li className={styles.link}>
                <Link href='/post/dashboard_user'>
                  <a>My publications</a>
                </Link>
              </li>
              <li>
                <Button value='Logout' buttonType='exitButton' buttonClass='redButton' handleClick={logOut} />
              </li>
            </>
          ) : (
            <>
              <li>
                <Button value='Publish a property' buttonType='button' buttonClass='redLinearButton' handleClick={() => {Router.push('/post/new_post_step_one')}}/>
              </li>
              <li className={styles.link}>
                <Link href='/register'>
                  <a>Register</a>
                </Link>
              </li>
              <li>
                <Link href='/login'>
                  <a>
                    <Button value='Login' buttonType='loginButton' buttonClass='purpleButton' />
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
};

export default HamburguerMenu;
