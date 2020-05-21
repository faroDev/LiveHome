import React from 'react';
import Layout from './../../src/components/Layout';
import styles from '../../src/styles/pages/admin/updateProperty.module.sass';
import Chip from '../../src/components/Chip';
import Input from './../../src/components/Input';
import Form from '../../src/components/Form';
import useInputValue from './../../src/hooks/useInputValue';
import Checkbox from '../../src/components/Checkbox';
import useCheckValue from './../../src/hooks/useCheckValue';
import Map from './../../src/components/Map';
import Button from './../../src/components/Button';
import FormField from './../../src/components/FormField';
import Selector from './../../src/components/Select';

const mockProperty = {
  images: ['img1', 'img2'],
  telefono: '+5723452345',
  email: 'prueba@mail.com',
  title: 'Prueba titulo',
  description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words',
  area: '180',
  price: '1000000',
  rooms: 4,
  bathrooms: 2,
  parking: 1,
  furnished: false,
  pool: true,
  heating: true,
  warehouse: true,
  security: false,
  elevator: true,
  nearby: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words',
  propertyType: 'Appartment',
  location: '4.592036,-74.1252351,18'
};

const updateProperty = ({ property = mockProperty }) => {
  const area = useInputValue(property.area);
  // Se descomenta cuando el componente Selector reciba selected option
  // const propertyType = useInputValue(property.propertyType);
  const rooms = useInputValue(property.rooms);
  const bathrooms = useInputValue(property.bathrooms);
  const price = useInputValue(property.price);
  const parking = useInputValue(property.parking);
  const furnished = useCheckValue(property.furnished);
  const elevator = useCheckValue(property.elevator);
  const pool = useCheckValue(property.pool);
  const heating = useCheckValue(property.heating);
  const security = useCheckValue(property.security);
  const warehouse = useCheckValue(property.warehouse);
  const location = useInputValue(property.location);
  const options = [{ value: 1, label: 'Approved' }, { value: 1, label: 'Pending' }, { value: 1, label: 'Deny' }];
  console.log('fur', furnished);

  return (
    <Layout>
      <div className={styles.__container}>
        <div className={styles.__carousel__container}>
          <img />
        </div>
        <h1>{property.title}</h1>
        <p>{property.description}</p>
        <Chip nameLabel='Detail' labelClass='rose_label' />
        <Form>
          <FormField>
            <Input type='number' label='Area m²' {...area} name='area' />
          </FormField>
          <FormField>
            <Selector label='Property Type' options={options} />
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
            <Map location={location} />
          </FormField>
          <FormField>
            <Chip nameLabel='Nearby Places' labelClass='purple_label' />
            <p>{property.nearby}</p>
          </FormField>
          <FormField>
            <Button buttonClass='greenButton' buttonType='submit' value='Update' />
          </FormField>
        </Form>
      </div>
    </Layout>
  );
};

export default updateProperty;
