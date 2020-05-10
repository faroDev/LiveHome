import styles from '../styles/components/DemoComponent.module.sass';
import ButtonIcon from './ButtonIcon';
import RadioButton from './RadioButton';
import Modal from './Modal';
import Select from './Select';
import Footer from './Footer';
import Carousel from './Carousel';

function DemoComponent () {
  const images = [
    {
      title: "Demo image",
      url: "https://fakeimg.pl/450x200/?text=Item_1&font=lobster"
    },
    {
      title: "Demo image",
      url: "https://fakeimg.pl/450x200/?text=Item_2&font=lobster"
    },
    {
      title: "Demo image",
      url: "https://fakeimg.pl/450x200/?text=Item_3&font=lobster"
    },
    {
      title: "Demo image",
      url: "https://fakeimg.pl/450x200/?text=Item_4&font=lobster"
    },
    {
      title: "Demo image",
      url: "https://fakeimg.pl/450x200/?text=Item_5&font=lobster"
    },
    {
      title: "Demo image",
      url: "https://fakeimg.pl/450x200/?text=Item_6&font=lobster"
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
      <Select name='test' options={['prueba 1', 'prueba 2', 'prueba 3']}/>
      <h4>Footer</h4>
      <Footer/>
      <h4>Carousel</h4>
      <Carousel images={images} />
    </>
  );
}

export default DemoComponent;
