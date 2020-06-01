import React, { useEffect, useContext, useState } from 'react';
import styles from '../../src/styles/pages/admin/home.module.sass';
import { useRouter } from 'next/router';
import API from '../../src/utils/api';
import verifySession from '../../src/utils/verifySession';

import UserContext from '../../src/components/UserContext';
import useInputValue from '../../src/hooks/useInputValue';

import Layout from '../../src/components/Layout';
import Button from '../../src/components/Button';
import Modal from '../../src/components/Modal';
import SearchBar from '../../src/components/SearchBar';
import Chip from '../../src/components/Chip';
import Form from '../../src/components/Form';
import FormField from '../../src/components/FormField';
import Input from '../../src/components/Input';
import Selector from '../../src/components/Select';
import RadioButton from '../../src/components/RadioButton';
import Loading from '../../src/components/Loading';
import Error from '../../src/components/Error';

import BuildingDetail from '../../src/components/BuildingDetail';
import Card from './../../src/components/Card';
import FeatherIcon from 'feather-icons-react';
import Checkbox from './../../src/components/Checkbox';
import useCheckValue from './../../src/hooks/useCheckValue';

const home = ({ dataPropertyType }) => {
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

  const area = useInputValue();
  const rooms = useInputValue();
  const bathrooms = useInputValue();
  const price = useInputValue();
  const parking = useInputValue();
  const furnished = useCheckValue();
  const elevator = useCheckValue();
  const pool = useCheckValue();
  const heating = useCheckValue();
  const security = useCheckValue();
  const warehouse = useCheckValue();
  const propertyTypeId = useInputValue();

  const { user, post, setPost } = useContext(UserContext);

  const [dataDetail, setDataDetail] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const router = useRouter();
  const [count, setCount] = useState(0);

  useEffect(() => {
    setLoading(true);
    const paramsSession = window.sessionStorage.getItem('paramsQuery');

    if (!paramsSession) {
      setLoading(false);
      router.push('/admin/filter');
    }

    if (post.length === 0) {
      fetchDataProperties(paramsSession);
      setCount(paramsSession.length);
    } else {
      setCount(post.length);
      setLoading(false);
    }
  }, []);

  const validateParams = () => {
    if (Object.keys(router.query).length === 0) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    setLoading(true);
    if (!validateParams()) {
      fetchDataPropertyDetail(router.query.id);
    } else {
      setLoading(false);
    }
  }, [router.query.id]);

  const fetchDataPropertyDetail = async (propertyId) => {
    setLoading(true);
    try {
      const response = await API.getPropertyDetail(propertyId);
      setDataDetail({ ...response.data, ...getPrice(response.data) });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const fetchDataProperties = async (paramsSession) => {
    setLoading(true);
    const params = JSON.parse(paramsSession);
    try {
      const response = await API.getPropertyHome(params.propertyTypeId, params.modalityTypeId, params.zoneId, user.userId);
      setLoading(false);
      if (response.data.length > 0) {
        setPost(response.data);
        setCount(response.data.length);
      } else {
        setError({ message: 'No existen datos' });
      }
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const handleClickDetail = (id) => {
    router.push(`/admin/home?id=${id}`, undefined, { shallow: true });
  };

  const handleBack = () => {
    if (isUpdate) {
      setIsUpdate(false);
    } else {
      router.back();
    }
  };

  if (!verifySession()) {
    window.alert('You must login');
    router.push('/login');
  }

  const handleStatus = async (propertyId, status) => {
    if (!verifySession()) {
      window.alert('You must login');
      router.push('/login');
    }
    const token = window.sessionStorage.getItem('jwt-token');
    try {
      await API.updateProperty(propertyId, token, { statusId: status });
      const newPost = [...post];
      newPost.find(item => item.id === propertyId).statusId = status;
      setPost(newPost);
      const newDetail = { ...dataDetail };
      newDetail.statusId = status;
      setDataDetail(newDetail);
    } catch (error) {
      setError(error);
    }
  };

  const handleUpdate = () => {
    area.setValue(dataDetail.m2);
    rooms.setValue(dataDetail.rooms);
    bathrooms.setValue(dataDetail.bathrooms);
    price.setValue(0);
    parking.setValue(dataDetail.parking);
    furnished.setChecked(dataDetail.furnished);
    elevator.setChecked(dataDetail.elevator);
    pool.setChecked(dataDetail.pool);
    heating.setChecked(dataDetail.heating);
    security.setChecked(dataDetail.security);
    warehouse.setChecked(false);
    propertyTypeId.setValue(dataDetail.propertyTypeId);
    setIsUpdate(true);
  };

  const getPrice = (item) => {
    let price, type;

    if (item.modalities.length === 0 || item.modalities[0].modality_type === null) {
      price = 0;
      type = 'NT';
      return { price, type };
    }
    if (item.modalities[0].modality_type.name === 'Rent') {
      price = item.modalities[0].pricePerMoth;
    } else {
      price = item.modalities[0].totalPrice;
    }
    type = item.modalities[0].modality_type.name;

    return { price, type };
  };

  const handleUpdateProperty = async (propertyId, event) => {
    event.preventDefault();
    const newData = {
      m2: area.value,
      rooms: rooms.value,
      bathrooms: bathrooms.value,
      parking: parking.value,
      furnished: furnished.checked,
      elevator: elevator.checked,
      pool: pool.checked,
      heating: heating.checked,
      security: security.checked,
      propertyTypeId: propertyTypeId.value
    };
    if (!verifySession()) {
      window.alert('You must login');
      router.push('/login');
    }
    const token = window.sessionStorage.getItem('jwt-token');
    try {
      await API.updateProperty(propertyId, token, newData);
      const newPost = [...post];

      newPost.find(item => item.id === propertyId).m2 = newData.m2;
      newPost.find(item => item.id === propertyId).rooms = newData.rooms;
      newPost.find(item => item.id === propertyId).bathrooms = newData.bathrooms;
      newPost.find(item => item.id === propertyId).price = newData.price;
      newPost.find(item => item.id === propertyId).parking = newData.parking;
      newPost.find(item => item.id === propertyId).furnished = newData.furnished;
      newPost.find(item => item.id === propertyId).elevator = newData.elevator;
      newPost.find(item => item.id === propertyId).pool = newData.pool;
      newPost.find(item => item.id === propertyId).heating = newData.heating;
      newPost.find(item => item.id === propertyId).security = newData.security;
      newPost.find(item => item.id === propertyId).propertyTpeId = newData.propertyTpeId;

      setPost(newPost);
      const newDetail = { ...dataDetail, ...newData };

      setDataDetail(newDetail);
      window.alert('Property Updated');
      setIsUpdate(false);
    } catch (error) {
      setError(error);
    }
  };

  const handleFilter = () => {
    router.push('/admin/filter');
  };

  return (
    <Layout>
      {
        loading && <Loading />
      }
      {
        error && <Error error={error} />
      }
      {
        !loading && !error &&
        validateParams()
          ? (
            <div className={styles.__container}>
              <div className={styles.__filter_container}>
                <Button value='Filter' buttonClass='grayLightLinearButton' buttonType='button' handleClick={handleFilter} />
                <h4 className={styles.__founds}>Where found <strong>{count}</strong> properties</h4>
              </div>
              <h1>Offers published</h1>
              <br />
              <div className={styles.__card__container}>
                {
                  post.map(property => {
                    return (
                      <Card images={property.files} key={property.id}>
                        <div className={styles.__card__header}>
                          <h4 className={styles.property__name} onClick={() => handleClickDetail(property.id)}>{property.title}</h4>
                          {
                            property.statusId === 2 && <FeatherIcon icon='check-circle' size={20} stroke='#2DCCA7' />
                          }
                          {
                            property.statusId === 1 && <FeatherIcon icon='clock' size={20} stroke='#ff9800' />
                          }
                          {
                            property.statusId === 3 && <FeatherIcon icon='x-circle' size={20} stroke='#F75C63' />
                          }
                        </div>
                        <p className={styles.publish__date}>{property.createdAt.substring(0, 10)}</p>
                      </Card>
                    );
                  }
                  )
                }
              </div>
            </div>
          ) : (
            <div className={styles.__details__container}>
              <Button buttonClass='grayLinearButton' buttonType='button' value='Back' handleClick={handleBack} />
              {
                !isUpdate && Object.keys(dataDetail).length > 0
                  ? (
                    <BuildingDetail building={{ user: { phone: '', auth: { email: '' } }, ...dataDetail, images: dataDetail.files }}>
                      {
                        console.log('data', dataDetail)
                      }
                      {
                        dataDetail.statusId === 1 &&
                          <>
                            <div className={styles.__buttons__container}>
                              <Button buttonClass='redButton' buttonType='submit' value='Deny' handleClick={() => handleStatus(dataDetail.id, 3)} />
                              <Button buttonClass='greenButton' buttonType='submit' value='Approve' handleClick={() => handleStatus(dataDetail.id, 2)} />
                            </div>
                            <Button buttonClass='greenLinearButton' buttonType='button' value='Edit Property' handleClick={() => handleUpdate()} />
                          </>
                      }
                    </BuildingDetail>
                  )
                  : (
                    <div className={styles.__container}>
                      <div className={styles.__carousel__container}>
                        <img />
                      </div>
                      <h1>{dataDetail.title}</h1>
                      <p>{dataDetail.description}</p>
                      <Chip nameLabel='Detail' labelClass='rose_label' />
                      <Form>
                        <div className={styles.__form__container}>
                          <FormField>
                            <Input type='number' label='Area m²' {...area} name='area' />
                          </FormField>
                          <FormField>
                            <Selector label='Property Type' options={dataPropertyType.data} {...propertyTypeId} />
                          </FormField>
                          <FormField>
                            <Input type='number' label='Rooms' {...rooms} name='rooms' />
                          </FormField>
                          <FormField>
                            <Input type='number' label='Bathrooms' {...bathrooms} name='bathrooms' />
                          </FormField>
                          <FormField>
                            <Input type='number' label='Price' {...price} name='price' />
                          </FormField>
                          <FormField>
                            <Input type='number' label='Parking' {...parking} name='parking' />
                          </FormField>
                          <FormField>
                            <Checkbox name='furnished' {...furnished} text='Furnished' />
                          </FormField>
                          <FormField>
                            <Checkbox name='elevator' {...elevator} text='Elevator' />
                          </FormField>
                          <FormField>
                            <Checkbox name='pool' {...pool} text='Swimming pool' />
                          </FormField>
                          <FormField>
                            <Checkbox name='heating' {...heating} text='Heating' />
                          </FormField>
                          <FormField>
                            <Checkbox name='security' {...security} text='Security service' />
                          </FormField>
                          <FormField>
                            <Checkbox name='warehouse' {...warehouse} text='Warehouse' />
                          </FormField>
                          <FormField>
                            <br />
                            <Chip nameLabel='Nearby Places' labelClass='purple_label' />
                            <p>{dataDetail.nearTo}</p>
                          </FormField>
                          <FormField>
                            <Button buttonClass='greenButton' buttonType='submit' value='Update' handleClick={(event) => handleUpdateProperty(dataDetail.id, event)} />
                          </FormField>
                        </div>
                      </Form>
                    </div>
                  )
              }
            </div>
          )
      }
    </Layout>
  );
};

export async function getStaticProps () {
  const dataPropertyType = await API.getPropertyType();

  return {
    props: {
      dataPropertyType
    }
  };
}

export default home;
