import React from 'react';
import styles from '../assets/styles/components/Header.module.sass';
import Logo from './Logo';
import Menu from './HamburguerMenu';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo isHeader />
      <Menu isActive={false} isLoggedIn={false} />
    </header>
  );
};

export default Header;
