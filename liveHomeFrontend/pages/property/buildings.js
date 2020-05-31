import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import API from '../../src/utils/api';
import verfySession from '../../src/utils/verifySession';

import UserContext from '../../src/components/UserContext';
import useInputValue from '../../src/hooks/useInputValue';
import useCheckValue from '../../src/hooks/useCheckValue';

import Layout from '../../src/components/Layout';
import Button from '../../src/components/Button';
import Modal from '../../src/components/Modal';
import Chip from '../../src/components/Chip';
import CardPreviewPublication from '../../src/components/CardPreviewPublication';
import Form from '../../src/components/Form';
import FormField from '../../src/components/FormField';
import Input from '../../src/components/Input';
import Checkbox from '../../src/components/Checkbox';
import Loading from '../../src/components/Loading';
import Error from '../../src/components/Error';

import MapView from '../../src/components/MapView';

import BuildingDetail from '../../src/components/BuildingDetail';

import styles from '../../src/styles/pages/buildings.module.sass';

const Buildings = () => {
  const bedroomsFilter = useInputValue();
  const bathroomsFilter = useInputValue();
  const totalPrinceMinFilter = useInputValue();
  const totalPrinceMaxFilter = useInputValue();
  const areaFilter = useInputValue();
  const parkingFilter = useInputValue();
  const mPriceMinFilter = useInputValue();
  const mPriceMaxFilter = useInputValue();
  const furnishedFilter = useCheckValue(false);
  const poolFilter = useCheckValue(false);
  const heatingFilter = useCheckValue(false);
  const warehouseFilter = useCheckValue(false);
  const elevatorFilter = useCheckValue(false);
  const securityFilter = useCheckValue(false);

  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const mapView = useCheckValue(true);
  
  const { user, post, setPost } = useContext(UserContext);
  
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
      const response = await API.getPropertyDetail(propertyId, user.userId);
      setDataDetail(response.data[0]);
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
      newPost.find( item => item.id === propertyId).favorites = !newPost.find( item => item.id === propertyId).favorites;
      setPost(newPost);
    } catch (error) {
      console.error('[error]', error);
      setError(error);
    }
  };

  const handleLikeDetail = async (propertyId, liked) => {
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
      const newDetail = {...dataDetail};
      newDetail.favorites = !newDetail.favorites;
      setDataDetail(newDetail);
      const newPost = [...post];
      newPost.find( item => item.id === propertyId).favorites = !newPost.find( item => item.id === propertyId).favorites;
      setPost(newPost);
    } catch (error) {
      console.error('[error]', error);
      setError(error);
    }
  };

  const handleFilter = async (event) => {
    event.preventDefault();
    setLoading(true);
    const paramsSession = sessionStorage.getItem('paramsQuery');
    
    if ( !paramsSession ){
      setLoading(false);
      router.push('/home');
    }

    const paramsFilter = {
      bedrooms : bedroomsFilter.value,
      bathrooms : bathroomsFilter.value,
      totalPrinceMin : totalPrinceMinFilter.value,
      totalPrinceMax : totalPrinceMaxFilter.value,
      area : areaFilter.value,
      mPriceMin : mPriceMinFilter.value,
      mPriceMax : mPriceMaxFilter.value,
      furnished : furnishedFilter.checked,
      parking : parkingFilter.checked,
      pool : poolFilter.checked,
      heating : heatingFilter.checked,
      warehouse : warehouseFilter.checked,
      elevator : elevatorFilter.checked,
      security : securityFilter.checked
    }
    console.log('Params Filter', paramsFilter);

    fetchDataPropertiesFilter(paramsSession, paramsFilter);
  };

  const fetchDataPropertiesFilter = async (paramsSession, paramsFilter) => {
    const params = JSON.parse(paramsSession);
    try {
      const response = await API.getPropertyHomeFilter(params.propertyTypeId, params.modalityTypeId, params.zoneId, user.userId, paramsFilter);
      
      if(response.data.length > 0){
        setPost(response.data);
      } else {
        setError({message:'No existen datos'});
      }
      
      setLoading(false);

    } catch (error) {
      console.error('[error]', error);
      setLoading(false);
      setError(error);
    }
  };

  const modal = () => {
    return (
      <Modal buttonText='Filter'>
        <div className={styles.buildings__modal_container}>
          <h3>Filter</h3>
          <Form onSubmit={handleFilter}>
            <FormField>
              <Input type='number' label='bedrooms' name='bedrooms' {...bedroomsFilter} />
            </FormField>
            <FormField>
              <Input type='number' label='bathrooms' name='bathrooms' {...bathroomsFilter} />
            </FormField>
            <FormField>
              <Input type='number' label='area' name='area' {...areaFilter} />
            </FormField>
            <FormField>
              <Input type='number' label='parking' name='parking' {...parkingFilter} />
            </FormField>
            <FormField>
            <FormField>
              <div className={styles.buildings__modal_field_range}>
                <Input type='number' label='total price (min - max)' name='price-min' {...totalPrinceMinFilter} />
                <Input type='number' label='' name='prince-max' {...totalPrinceMaxFilter} />
              </div>
            </FormField>
              <div className={styles.buildings__modal_field_range}>
                <Input type='number' label='m2 price (min - max)' name='price-min' {...mPriceMinFilter} />
                <Input type='number' label='' name='prince-max' {...mPriceMaxFilter} />
              </div>
            </FormField>
            <FormField>
              <Checkbox name='furnished' text='Furnished' {...furnishedFilter} />
            </FormField>
            <FormField>
              <Checkbox name='pool' text='Swimming pool' {...poolFilter} />
            </FormField>
            <FormField>
              <Checkbox name='heating' text='Heating' {...heatingFilter} />
            </FormField>
            <FormField>
              <Checkbox name='warehouse' text='Warehouse' {...warehouseFilter} />
            </FormField>
            <FormField>
              <Checkbox name='elevator' text='Elevator' {...elevatorFilter} />
            </FormField>
            <FormField>
              <Checkbox name='security' text='Security service' {...securityFilter} />
            </FormField>
            <FormField>
              <Button buttonType='submit' buttonClass='grayButton' value='Apply filter' />
            </FormField>
          </Form>
        </div>
      </Modal>
    );
  };

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
                <Checkbox name='map view' text='View Map' {...mapView} />
              </div>
            </div>
            <div className={styles.buildings__label}>
              <Chip nameLabel={`Where found ${post.length} properties`} labelClass='gray_label' />
            </div>
            {
              mapView.checked &&
              <div className={styles.buildings__map_container}>
                <MapView />
              </div>
            }
            {
              post.map( postItem => {
                return (
                  <CardPreviewPublication
                    key={postItem.id}
                    images={postItem.files}
                    title={postItem.title}
                    price={postItem.modalities.length > 0 && postItem.modalities[0].totalPrice || 0 }
                    description={postItem.description}
                    rooms={postItem.rooms}
                    bathrooms={postItem.bathrooms}
                    area={postItem.m2}
                    parking={postItem.parking}
                    id={postItem.id}
                    handleLike={handleLike}
                    liked={postItem.favorites}
                  />
                );
              })
            }
          </>
        );
      }
  };

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
          <BuildingDetail building={dataDetail} handleLike={handleLikeDetail} />
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
