import React, { useEffect, useContext, useState } from 'react';
import Router, { useRouter } from 'next/router';
import API from '../../src/utils/api';

import Button from '../../src/components/Button';
import BuildingDetail from '../../src/components/BuildingDetail';

import Layout from './../../src/components/Layout';
import styles from '../../src/styles/pages/favouriteDetail.module.sass';
import Loading from '../../src/components/Loading';
import Error from './../../src/components/Error';
import verifySesion from './../../src/utils/verifySession';

const favouriteDetail = () => {
  const router = useRouter();
  const { propertyId } = router.query;
  const [dataDetail, setDataDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    setLoading(true);
    if (verifySesion()) {
      getData()
        .then(async ({ data, error }) => {
          if (!error) {
            setDataDetail(data[0]);
            setImages(data[0].files.reduce(fileReducer, []));
          } else {
            setError(error);
          }
          setLoading(false);
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

  const getData = async () => {
    return API.getPropertyDetail(propertyId);
  };

  const handleBack = () => {
    router.back();
  };

  const fileReducer = (images, obj) => {
    return images.concat(obj.url);
  };

  // const handleLike = async (propertyId, liked) => {
  //   if (!verfySession()) {
  //     alert('You must login');
  //     router.push('/login');
  //   }
  //   const token = sessionStorage.getItem('jwt-token');
  //   try {
  //     if (liked) {
  //       await API.setDislikeProperty(propertyId, user.userId, token);
  //     } else {
  //       await API.setLikeProperty(propertyId, user.userId, token);
  //     }
  //     const newPost = [...post];
  //     newPost.find(item => item.id === propertyId).favorites = !newPost.find(item => item.id === propertyId).favorites;
  //     setPost(newPost);
  //   } catch (error) {
  //     console.error('[error]', error);
  //     setError(error);
  //   }
  // };

  return (
    <Layout>
      {
        loading && <Loading />
      }
      {
        error && <Error error={error} />
      }
      {
        !loading && !error && (
          <div className={styles.__container}>
            <Button buttonClass='grayLinearButton' buttonType='button' value='Back' handleClick={handleBack} />
            <BuildingDetail building={{ ...dataDetail, images: images }} />
          </div>
        )
      }
    </Layout>
  );
};

export default favouriteDetail;
