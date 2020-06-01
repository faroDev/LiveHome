import React, { useContext, useState, useEffect } from 'react';
import decode from 'jwt-decode';

import Layout from '../../src/components/Layout';
import OffererCardPublication from '../../src/components/OffererCardPublication';
import UserContext from '../../src/components/UserContext';

import API from '../../src/utils/api';

import styles from '../../src/styles/pages/post/dashboard_user.module.sass';

const dashboardUser = () => {
  const { token } = useContext(UserContext);
  const user = decode(token);
  const [properties, setProperty] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await API.getPropertiesByUser(token, user.userId);
      return setProperty(data.data);
    }
    fetchData();
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        <h1>Dashboard</h1>
        <div className={styles.offers}>
          {properties.map((item, key) => {
            return <OffererCardPublication key={key} id={item.id} title={item.title} date={item.createdAt} images={item.files} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default dashboardUser;
