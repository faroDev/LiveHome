import React from 'react';
import Layout from './../src/components/Layout';
import CardPreviewPublication from './../src/components/CardPreviewPublication';
import styles from '../src/styles/pages/favourites.module.sass';

const dataMock = [
  {
    id: 1,
    images: [],
    title: 'Property 1',
    price: '100',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
    rooms: 3,
    bathrooms: 2,
    area: '65',
    parking: 1
  },
  {
    id: 2,
    images: [],
    title: 'Property 2',
    price: '200',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
    rooms: 3,
    bathrooms: 2,
    area: '65',
    parking: 1
  },
  {
    id: 3,
    images: [],
    title: 'Property 3',
    price: '300',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
    rooms: 3,
    bathrooms: 2,
    area: '65',
    parking: 1
  },
  {
    id: 4,
    images: [],
    title: 'Property 4',
    price: '400',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
    rooms: 3,
    bathrooms: 2,
    area: '65',
    parking: 1
  }
];

const Favourites = ({ data = dataMock }) => {
  return (
    <Layout>
      <div className={styles.__container}>
        <h1>Favourites</h1>
        {data.map(property => <CardPreviewPublication key={property.id} {...property} />)}
      </div>
    </Layout>
  );
};

export default Favourites;
