import React from 'react';
import { useRouter } from 'next/router';

import BuildingDetail from '../../src/components/BuildingDetail';

const data = {
  images: ['img1', 'img2'],
  telefono: '+5723452345',
  email: 'prueba@mail.com',
  title: 'Prueba titulo',
  description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words',
  area: '180m',
  rooms: 4,
  bathrooms: 2,
  parking: 1,
  furnished: 'No',
  pool: 'Yes',
  heating: 'Yes',
  warehouse: 'Yes',
  security: 'No',
  elevator: 0,
  nearby: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words'
};

const PublicationDetail = (props) => {
  const router = useRouter();
  const {propertyId} = router.query
  console.log(propertyId);
  return (
    <BuildingDetail building={data} />
  );
};

export default PublicationDetail;
