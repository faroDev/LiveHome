import React from 'react';
import Header from './Header';

import styles from '../styles/components/Layout.module.sass';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
