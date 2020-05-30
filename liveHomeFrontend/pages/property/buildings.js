import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import API from '../../src/utils/api';
import verfySession from '../../src/utils/verifySession';

import UserContext from '../../src/components/UserContext';
import useInputValue from '../../src/hooks/useInputValue';

import Layout from '../../src/components/Layout';
import Button from '../../src/components/Button';
import Modal from '../../src/components/Modal';
import SearchBar from '../../src/components/SearchBar';
import Chip from '../../src/components/Chip';
import CardPreviewPublication from '../../src/components/CardPreviewPublication';
import Form from '../../src/components/Form';
import FormField from '../../src/components/FormField';
import Input from '../../src/components/Input';
import Selector from '../../src/components/Select';
import RadioButton from '../../src/components/RadioButton';
import Loading from '../../src/components/Loading';
import Error from '../../src/components/Error';

import BuildingDetail from '../../src/components/BuildingDetail';

import styles from '../../src/styles/pages/buildings.module.sass';

const Buildings = () => {
  const typePropertyFilter = useInputValue('');
  const bedroomsFilter = useInputValue('');
  const bathroomsFilter = useInputValue('');
  const totalPrinceMinFilter = useInputValue('');
  const totalPrinceMaxFilter = useInputValue('');
  const areaFilter = useInputValue('');
  const mPriceMinFilter = useInputValue('');
  const mPriceMaxFilter = useInputValue('');
  const furnishedFilter = useInputValue('');
  const parkingFilter = useInputValue('');
  const poolFilter = useInputValue('');
  const heatingFilter = useInputValue('');
  const warehouseFilter = useInputValue('');
  const elevatorFilter = useInputValue('');
  const securityFilter = useInputValue('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const { user, post, setPost } = useContext(UserContext);
  
  const [dataBuild, setDataBuild] = useState([]);
  const [dataDetail, setDataDetail] = useState([]);
  const router = useRouter();

  useEffect( ()=>{
    setLoading(true);
    const paramsSession = sessionStorage.getItem('paramsQuery');
    
    if ( !paramsSession ){
      setLoading(false);
      router.push('/home');
    }

    if ( post.length === 0 ){
      fetchDataProperties(paramsSession);
    } else {
      setDataBuild(post);
      setLoading(false);
    }

  }, []);
  
  const fetchDataProperties = async (paramsSession) => {
    setLoading(true);
    const params = JSON.parse(paramsSession);
    try {
      const response = await API.getPropertyHome(params.propertyTypeId, params.modalityTypeId, params.zoneId, user.userId);
      setLoading(false);
      if(response.data.length > 0){
        setPost(response.data);
        // setDataBuild(response.data);
      } else {
        setError({message:'No existen datos'});
      }

    } catch (error) {
      console.error('[error]', error);
      setLoading(false);
      setError(error);
    }
  };

  useEffect( ()=>{
    setLoading(true);
    if (!validateParams()){
      fetchDataPropertyDetail(router.query.id);
    } else {
      setLoading(false);
    }
  }, [router.query.id]);

  const fetchDataPropertyDetail = async (propertyId) => {
    setLoading(true);
    try {
      const response = await API.getPropertyDetail(propertyId);
      setDataDetail(response.data);
      setLoading(false);
    } catch (error) {
      console.error('[error]', error);
      setLoading(false);
      setError(error);
    }
  };

  const handleBack = () => {
    router.back();
  }

  const handleClickDetail = (id) => {
    router.push(`/property/buildings?id=${id}`, undefined, { shallow: true });
  }

  const validateParams = () => {
    if (Object.keys(router.query).length === 0){
      return true;
    }
    return false;
  }

  const handleLike = async (propertyId, liked) => {
    if(!verfySession()){
      alert('You must login');
      router.push('/login');
    }
    const token = sessionStorage.getItem('jwt-token');
    try {
      if (liked){
        await API.setDislikeProperty(propertyId, user.userId, token);
      } else {
        await API.setLikeProperty(propertyId, user.userId, token);
      }
      const newPost = [...post];
      newPost.find( item => item.id === propertyId).favorites = !newPost.find( item => item.id === propertyId).favorites
      setPost(newPost);
    } catch (error) {
      console.error('[error]', error);
      setError(error);
    }
    
  }

  const modal = () => {
    return (
      <Modal buttonText='Filter'>
        <div className={styles.buildings__modal_container}>
          <h3>Filter</h3>
          <Form>
            <FormField>
              <Selector label='Property type' options={[{ value: 1, label: 1 }, { value: 2, label: 2 }, { value: 3, label: 3 }]} {...typePropertyFilter} />
            </FormField>
            <FormField>
              <Input type='number' label='bedrooms' name='bedrooms' {...bedroomsFilter} />
            </FormField>
            <FormField>
              <Input type='number' label='bathrooms' name='bathrooms' {...bathroomsFilter} />
            </FormField>
            <FormField>
              <div className={styles.buildings__modal_field_range}>
                <Input type='number' label='total price (min - max)' name='price-min' {...totalPrinceMinFilter} />
                <Input type='number' label='' name='prince-max' {...totalPrinceMaxFilter} />
              </div>
            </FormField>
            <FormField>
              <Input type='number' label='area' name='area' {...areaFilter} />
            </FormField>
            <FormField>
              <div className={styles.buildings__modal_field_range}>
                <Input type='number' label='m2 price (min - max)' name='price-min' {...mPriceMinFilter} />
                <Input type='number' label='' name='prince-max' {...mPriceMaxFilter} />
              </div>
            </FormField>
            <FormField>
              <RadioButton options={['yes', 'no']} name='furnished' title='furnished' {...furnishedFilter} />
            </FormField>
            <FormField>
              <RadioButton options={['yes', 'no']} name='parking' title='parking' {...parkingFilter} />
            </FormField>
            <FormField>
              <RadioButton options={['yes', 'no']} name='pool' title='Swimming pool' {...poolFilter} />
            </FormField>
            <FormField>
              <RadioButton options={['yes', 'no']} name='heating' title='heating' {...heatingFilter} />
            </FormField>
            <FormField>
              <RadioButton options={['yes', 'no']} name='warehouse' title='warehouse' {...warehouseFilter} />
            </FormField>
            <FormField>
              <RadioButton options={['yes', 'no']} name='elevator' title='elevator' {...elevatorFilter} />
            </FormField>
            <FormField>
              <RadioButton options={['yes', 'no']} name='security' title='security service' {...securityFilter} />
            </FormField>
            <Button buttonType='submit' buttonClass='grayButton' value='Apply filter' />
          </Form>
        </div>
      </Modal>
    );
  }

  const buildings = () => {
      if (loading) {
        return <Loading />
      }
      
      if (error) {
        return <Error error={error} />
      }
      
      if (validateParams() && !loading && !error) 
      {
        return (
          <>
            <div className={styles.buildings__filter_container}>
              <div className={styles.buildings__filter_container_button}>
                { modal() }
              </div>
              <div className={styles.buildings__filter_container_searchbar}>
                <SearchBar />
              </div>
            </div>
            <div className={styles.buildings__label}>
              <Chip nameLabel={`Where found ${post.length} properties`} labelClass='gray_label' />
            </div>
            {
              post.map( postItem => {
                return (
                  <CardPreviewPublication
                    key={postItem.id}
                    images={postItem.files}
                    title={postItem.title}
                    price={postItem.totalPrice}
                    description={postItem.description}
                    rooms={postItem.rooms}
                    bathrooms={postItem.bathrooms}
                    area={postItem.m2}
                    parking={postItem.parking}
                    id={postItem.id}
                    handleLike={handleLike}
                    liked={postItem.favorites}
                    handleClickDetail={handleClickDetail}
                  />
                );
              })
            }
          </>
        );
      }
  }

  const buildingDetail = () => {
    if (loading) {
      return <Loading />
    }
    
    if (error) {
      return <Error error={error} />
    }
    if ( !validateParams() && !loading && !error && Object.keys(dataDetail).length > 0) {
      return (
        <>
          <Button buttonClass='grayLinearButton' buttonType='button' value='Back' handleClick={handleBack} />
          <BuildingDetail building={dataDetail} />
        </>
      );
    }
  }

  return (
    <Layout>
      <div className={styles.buildings__container}>
        {
          validateParams() ? buildings() : buildingDetail()
        }
      </div>
    </Layout>
  );
};

export default Buildings;
