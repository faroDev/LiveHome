import React, { useState, useContext, useEffect } from 'react';
import Layout from './../src/components/Layout';
import CardPreviewPublicationFavs from './../src/components/CardPreviewPublicationFavs';
import styles from '../src/styles/pages/favourites.module.sass';
import UserContext from './../src/components/UserContext';
import api from '../src/utils/api';
import Error from './../src/components/Error';
import Loading from './../src/components/Loading';
import Router from 'next/router';
import verifySesion from './../src/utils/verifySession';

const Favourites = () => {
  const { user, token, post, setPost } = useContext(UserContext);
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
            setPost(data);
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

  const favourteClick = async (propertyId) => {
    if (!verifySesion()) {
      window.alert('You must login');
      Router.push('/login');
    }
    try {
      await api.setDislikeProperty(propertyId, user.userId, token);
      setPost(post.filter(item => item.id !== propertyId));
    } catch (error) {
      console.error('[error]', error);
      setError(error);
    }
  };

  const handleClickDetail = (id) => {

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
            (post.length > 0
              ? (post.map(property => {
                const images = property.files.reduce(fileReducer, []);
                return <CardPreviewPublicationFavs key={property.id} {...property} area={property.m2} liked images={images} handleLike={favourteClick} handleClickDetail={handleClickDetail} price={property.modalities.length > 0 ? property.modalities[0].totalPrice : '0'} />;
              }))
              : (<div><br /><h1>You have not favourites</h1></div>))
        }
      </div>
    </Layout>
  );
};

export default Favourites;
