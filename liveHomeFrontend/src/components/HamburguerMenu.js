import React from 'react';
import Link from 'next/link';
import HamburguerMenuIcon from '../assets/statics/icons/hamburguer-icon.png';
import styles from '../assets/styles/components/HamburguerMenu.module.sass';
import Button from './Button';

const HamburguerMenu = ({ isLoggedIn, isActive }) => {
  return (
    <nav className={styles.burgerMenu}>
      {isActive ? (
        <span>X</span>
      ) : (
        <img
          className={`${styles.burguerIcon} ${styles.firstLine}`}
          src={HamburguerMenuIcon}
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
