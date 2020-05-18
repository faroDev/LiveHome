import React from 'react';
import Link from 'next/link';
import FeatherIcon from 'feather-icons-react';
import styles from '../styles/components/HamburguerMenu.module.sass';
import Button from './Button';

const HamburguerMenu = ({ isLoggedIn, isActive }) => {
  return (
    <nav className={styles.burgerMenu}>
      {isActive ? (
        <FeatherIcon icon='x' size={20} stroke='#4424A6' />
      ) : (
        <FeatherIcon
          icon='menu'
          className={styles.burguerIcon}
          size={70}
          stroke='#4424A6'
        />
      )}
      {isActive && (
        <ul className={styles.list}>
          {isLoggedIn ? (
            <>
              <li>
                <Button value='Publish a property' buttonType='publishButton' />
              </li>
              <li className={styles.link}>
                <Link href='/'>
                  <a>My account</a>
                </Link>
              </li>
              <li className={styles.link}>
                <Link href='/'>
                  <a>My favourites</a>
                </Link>
              </li>
              <li className={styles.link}>
                <Link href='/'>
                  <a>My publications</a>
                </Link>
              </li>
              <li>
                <Button value='Logout' buttonType='exitButton' />
              </li>
            </>
          ) : (
            <>
              <li>
                <Button value='Publish a property' buttonType='publishButton' />
              </li>
              <li className={styles.link}>
                <Link href='/'>
                  <a>Register</a>
                </Link>
              </li>
              <li>
                <Button value='Login' buttonType='loginButton' />
              </li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
};

export default HamburguerMenu;
