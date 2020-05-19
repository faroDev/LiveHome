import React from 'react';

import Layout from '../src/components/Layout';
import Button from '../src/components/Button';
import Modal from '../src/components/Modal';
import SearchBar from '../src/components/SearchBar';
import Chip from '../src/components/Chip';
import CardPreviewPublication from '../src/components/CardPreviewPublication';
import Form from '../src/components/Form';
import FormField from '../src/components/FormField';
import Input from '../src/components/Input';
import Selector from '../src/components/Selector';
import RadioButton from '../src/components/RadioButton';


import styles from '../src/styles/pages/buildings.module.sass';

const Buildings = () => {
  return (
    <Layout>    
      <div className={styles.buildings__container}>
        <div className={styles.buildings__filter_container}>
          <div className={styles.buildings__filter_container_button}>
            {/* <Button value='Filter' buttonClass='grayLinearButton' /> */}
            <Modal buttonText='Filter'>
              <div className={styles.buildings__modal_container}>
                <h3>Filter</h3>
                <Form >
                  <FormField>
                    <Selector label='Property type' options={[]}/>
                  </FormField>
                  <FormField>
                    <Input type='numeric' label='bedrooms' name='bedrooms' />
                  </FormField>
                  <FormField>
                    <Input type='numeric' label='bathrooms' name='bathrooms' />
                  </FormField>
                  <FormField>
                    <div className={styles.buildings__modal_field_range}>
                      <Input type='numeric' label='total price (min - max)' name='price-min' />
                      <Input type='numeric' label='' name='prince-max' />
                    </div>
                  </FormField>
                  <FormField>
                    <Input type='numeric' label='area' name='area' />
                  </FormField>
                  <FormField>
                    <div className={styles.buildings__modal_field_range}>
                      <Input type='numeric' label='m2 price (min - max)' name='price-min' />
                      <Input type='numeric' label='' name='prince-max' />
                    </div>
                  </FormField>
                  <FormField>
                    <RadioButton options={['yes', 'no']} name='furnished' title='furnished'/>
                  </FormField>
                  <FormField>
                    <RadioButton options={['yes', 'no']} name='parking' title='parking'/>
                  </FormField>
                  <FormField>
                    <RadioButton options={['yes', 'no']} name='pool' title='Swimming pool'/>
                  </FormField>
                  <FormField>
                    <RadioButton options={['yes', 'no']} name='heating' title='heating'/>
                  </FormField>
                  <FormField>
                    <RadioButton options={['yes', 'no']} name='warehouse' title='warehouse'/>
                  </FormField>
                  <FormField>
                    <RadioButton options={['yes', 'no']} name='elevator' title='elevator'/>
                  </FormField>
                  <FormField>
                    <RadioButton options={['yes', 'no']} name='security' title='security service'/>
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
          <Chip nameLabel={`Where found ### properties`} labelClass='gray_label' />
        </div>
        <CardPreviewPublication
          images={[]}
          title='prueba titulo'
          price='895000' type='Rent'
          description='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock'
          rooms='4'
          bathrooms='2'
          area='180'
          parking='2'
        />
      </div>
    </Layout>
  );
};

export default Buildings;
