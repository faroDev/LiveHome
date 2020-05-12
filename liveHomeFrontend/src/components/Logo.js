import React from 'react';
import LogoLiveHome from '../assets/statics/images/LiveHome-logo.png';
import Link from 'next/link';
import styles from '../styles/components/Logo.module.sass';

const Logo = ({ isHeader }) => {
  return (
    <>
      <Link href='/'>
        <a className={styles.backHome}>
          <img
            className={`${isHeader ? styles.smallLogo : styles.bigLogo}`}
            src={LogoLiveHome}
            alt='LiveHome logo'
          />
        </a>
      </Link>
    </>
  );
};

export default Logo;
