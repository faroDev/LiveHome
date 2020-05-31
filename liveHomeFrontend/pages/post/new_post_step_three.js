import React, { useState, useEffect, useContext } from 'react';
import Router from 'next/router';

import setInputValue from '../../src/hooks/useInputValue';
import verifySesion from '../../src/utils/verifySession';

import Layout from '../../src/components/Layout';
import Form from '../../src/components/Form';
import FormField from '../../src/components/FormField';
import TextAreaComponent from '../../src/components/TextAreaComponent';
import Button from '../../src/components/Button';
import Icon from '../../src/components/Icon';
import Lightbox from '../../src/components/Lightbox';
import Error from '../../src/components/Error';
import Loading from '../../src/components/Loading';
import UserContext from '../../src/components/UserContext';

import API from '../../src/utils/api';

import styles from '../../src/styles/pages/post/new_post_step_three.module.sass';

const newPostStepThree = () => {
  const { offer, setOffer, token } = useContext(UserContext);

  const [file , setFile] = useState([]);
  const [loading, setLoading] = useState(false);

  const description = setInputValue('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!verifySesion()) {
      Router.push('/login');
    }
  }, [])
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const newPost = { ...offer, description: description.value };

    const property = await API.postProperty(token, newPost, file);
    if (property.error) {
      setError(property);
      setLoading(false);
      return;
    }
    console.log(property);
    const modality = await API.postModality(token, property.data, newPost.price, newPost.modalityType);
    console.log(modality);
    const details = await API.postPropertyDetails(token, newPost, property.data.id)
    if (details.data.id) {
      Router.push('/post/dashboard_user');
    } else {
      setError(details);
      setLoading(false);
      return;
    }
  }

  const handleChange = (e) => {
    setFile([
      ...file,
      {
        data: e.target.files[0],
        name: e.target.files[0].name
      }
    ])
  }

  const handleDelete = (e, name) => {
    e.preventDefault();
    const deleteFile = file.filter((item) => item.name != name);
    setFile(deleteFile);
  }

  if (error) {
    return (
      <Lightbox>
        <Error error={error} />
      </Lightbox>
    )
  }

  return (
    <Layout>
      <div className={styles.container}>
        <h1>Media - step 3/3</h1>
        <Form onSubmit={handleSubmit}>
          <FormField>
            <TextAreaComponent label='Description' name='description' required {...description} />
            <span className={styles.info}>Max. 6 photos and 1 video</span>
          </FormField>
          <FormField>
            <label htmlFor='file-upload' className={styles.file}>
              Upload Image
            </label>  
            <input className={styles.fileUpload} type='file' id='file-upload' onChange={ e => handleChange(e)}/>
          </FormField>
          <div className={styles.thumbnails}>
            <ul className={styles.list}>
              {file.map((item, key) => {
                return(
                  <li key={key}>
                    <span>{item.name}</span>
                    <a href='#' onClick={e => handleDelete(e, item.name)}>
                      <Icon name='x' />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={styles.buttons}>
            <Button value='Back' buttonClass='grayLightLinearButton' buttonType='button' handleClick={() => { Router.back(); }} />
            <Button value='Create post' buttonClass='greenButton' buttonType='button' handleClick={(e) => handleSubmit(e)} />
          </div>
        </Form>
      </div>

      {
        loading && 
        <Lightbox>
          <Loading />
        </Lightbox>
      }

    </Layout>
  );
};

export default newPostStepThree;
