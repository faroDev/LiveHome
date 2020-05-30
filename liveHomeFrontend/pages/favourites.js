import React, { useState, useContext, useEffect } from 'react';
import Layout from './../src/components/Layout';
import CardPreviewPublication from './../src/components/CardPreviewPublication';
import styles from '../src/styles/pages/favourites.module.sass';
import UserContext from './../src/components/UserContext';
import api from '../src/utils/api';
import Error from './../src/components/Error';
import Loading from './../src/components/Loading';
import Router from 'next/router';
import verifySesion from './../src/utils/verifySession';

const Favourites = () => {
  const { user, token } = useContext(UserContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const fileReducer = (images, obj) => {
    return images.concat(obj.url);
  };

  useEffect(() => {
    setLoading(true);
    if (verifySesion()) {
      getData(user.userId, token)
        .then(async ({ data, error }) => {
          if (!error) {
            setData(data);
          } else {
            setError(error);
          }
          setLoading(false);
          setLoaded(true);
        })
        .catch(error => {
          setError(error);
          console.log(error);
        });
    } else {
      window.alert('Your session finisshed');
      Router.push('/login');
    }
  }, []);

  const getData = (id, token) => {
    return api.getUserFavourites(id, token);
  };

  const favourteClick = (index) => {
    console.log('indexc', index);

    setData(data.filter(item => item.id !== index));
  };

  return (
    <Layout>
      <div className={styles.__container}>
        <h1>Favourites</h1>
        {
          loading && <Loading />
        }
        {
          error && <Error error={error} />
        }
        {
          loaded &&
            (data.length > 0
              ? (data.map(property => {
                const images = property.files.reduce(fileReducer, []);
                return <CardPreviewPublication key={property.id} {...property} area={property.m2} favourite images={images} favouriteClick={favourteClick} />;
              }))
              : (<div><br /><h1>No hay datos</h1></div>))
        }
      </div>
    </Layout>
  );
};

export default Favourites;
