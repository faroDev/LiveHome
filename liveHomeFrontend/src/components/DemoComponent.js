import styles from '../styles/components/DemoComponent.module.sass';
import ButtonIcon from './ButtonIcon';
import RadioButton from './RadioButton';
import Modal from './Modal';
import Select from './Select';
import Footer from './Footer';
import Carousel from './Carousel';

import Input from './Input';
import TextArea from './TextArea';
import Selector from './Selector';
import HeaderInfoDashboard from './HeaderInfoDashboard';
import PreviewImage from './PreviewImage';
import SearchBar from './SearchBar';
import Checkbox from './Checkbox';
import InfoDetailDashboard from './InfoDetailDashboard';

function DemoComponent () {
  const images = [
    {
      title: 'Demo image',
      url: 'https://fakeimg.pl/450x200/?text=Item_1&font=lobster'
    },
    {
      title: 'Demo image',
      url: 'https://fakeimg.pl/450x200/?text=Item_2&font=lobster'
    },
    {
      title: 'Demo image',
      url: 'https://fakeimg.pl/450x200/?text=Item_3&font=lobster'
    },
    {
      title: 'Demo image',
      url: 'https://fakeimg.pl/450x200/?text=Item_4&font=lobster'
    },
    {
      title: 'Demo image',
      url: 'https://fakeimg.pl/450x200/?text=Item_5&font=lobster'
    },
    {
      title: 'Demo image',
      url: 'https://fakeimg.pl/450x200/?text=Item_6&font=lobster'
    }
  ];

  return (
    <>
      <h2 className={styles.titulo}>This is liveHome</h2>
      <p>Development by</p>
      <ul>
        <li>@bautistaj</li>
        <li>@jrdiazr</li>
        <li>@lcasallas</li>
        <li>@sjimen13</li>
        <li>@helbertoro</li>
      </ul>
<<<<<<< HEAD
      <h3>Components</h3>
      <h4>Button with Icon</h4>
      <ButtonIcon icon='check' size='24px' />
      <h4>Radio Button</h4>
      <RadioButton options={['yes', 'no']} name='test' />
      <h4>Modal</h4>
      <Modal buttonText='Abril modal'>
        <p>Este es el conetido del modal</p>
      </Modal>
      <h4>Select</h4>
      <Select name='test' options={['prueba 1', 'prueba 2', 'prueba 3']} />
      <h4>Footer</h4>
      <Footer />
      <h4>Carousel</h4>
      <Carousel images={images} />
=======
      <Input type='text' label='text' />
      <Input type='email' label='email' />
      <Input type='number' minValue='0' label='number' />
      <Input type='password' label='password' />
      <TextArea label='textArea' />
      <Selector label='selector' options={[{ value: 1, label: 'opcion1' }, { value: 2, label: 'opcion2' }, { value: 3, label: 'opcion3' }]} />
      <p>Component: Header info dashboard</p>
      <HeaderInfoDashboard offers={20} visitors={52435} favourites={50} />
      <p>Component: Preview Image</p>
      <PreviewImage />
      <p>Component: Search Bar</p>
      <SearchBar />
      <p>Component: Checkbox</p>
      <Checkbox text='prueba' />
      <p>Component: Title info dashboard detail</p>
      <InfoDetailDashboard iconSrc='/static/visitors.png' title='Visitors' value='2543' />
      <InfoDetailDashboard iconSrc='/static/like.png' title='Favourites' value='23' />
>>>>>>> f5ec240b154b15f73211630d84b1ec2d04468b97
    </>
  );
}

export default DemoComponent;
