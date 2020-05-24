import React from 'react';
import styles from '../styles/components/Error.module.sass';
import Link from 'next/link';

const Error = ({ error }) => {
  return (
    <div className={styles.__page}>
      <div className={styles.__container}>
        <h1 className={styles.__title}>!Oppps, An error ocurred.</h1>
        <p className={styles.__mesagge}>{`${error.message}, back to `}
          <Link href='/login'>
            <a className={styles.__mesagge}>Login</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Error;
