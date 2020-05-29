import React, { useEffect, useContext, useState } from 'react';
// import Router from 'next/router';
import { useRouter } from 'next/router';

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

import BuildingDetail from '../../src/components/BuildingDetail';

import styles from '../../src/styles/pages/buildings.module.sass';

const Buildings = (props) => {
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

  const { post } = useContext(UserContext);

  const router = useRouter();

  const [data, setData] = useState([]);

  useEffect( ()=>{
    if ( post.length === 0 ){
      // Router.push('/home');
      router.push('/home');
    }
  }, []);

  useEffect( ()=>{
    console.log('ROUTER', router);
    const dataDetail = post.filter( item => item.id === router.query.id );
    setData(dataDetail);
  }, [router.query.id]);

  const handleBack = () => {
    router.push(`/property/buildings`, undefined, { shallow: true });
  }

  return (
    <Layout>
      <div className={styles.buildings__container}>
        {
          Object.keys(router.query).length === 0 &&
          <>
            <div className={styles.buildings__filter_container}>
              <div className={styles.buildings__filter_container_button}>
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
                    images={[]}
                    title={postItem.title}
                    price={postItem.totalPrice}
                    description={postItem.description}
                    rooms={postItem.rooms}
                    bathrooms={postItem.bathrooms}
                    area={postItem.m2}
                    parking={postItem.parking}
                    id={postItem.id}
                  />
                );
              })
            }
          </>
        }
        {
          Object.keys(router.query).length > 0 &&    
          <>
            <button onClick={handleBack}>Back</button>
            <BuildingDetail building={data} />
          </>
        }
        </div>
    </Layout>
  );
};

export default Buildings;
