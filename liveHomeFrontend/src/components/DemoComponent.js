import styles from '../styles/components/DemoComponent.module.sass';
import Header from './Header';
import Button from './Button';
import Logo from './Logo';
import Card from './Card';
import Map from './Map';
import BarChart from './BarChart';
import PieChart from './PieChart';
import ButtonIcon from './ButtonIcon';
import RadioButton from './RadioButton';
import Modal from './Modal';
import Select from './Select';
import Footer from './Footer';
// import Carousel from './Carousel';

import Input from './Input';
import TextArea from './TextArea';
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
      <Logo isHeader={false} />
      <Header />
      <Button value='test' buttonClass='loginButton' buttonType='submit' />
      <Button value='test' buttonClass='submitButton' buttonType='submit' />
      <Button value='test' buttonClass='backButton' buttonType='reset' />
      <Button
        value='test'
        buttonClass='filterOptionsButton'
        buttonType='button'
      />
      <Button value='test' buttonClass='filterButton' buttonType='button' />
      <Button value='test' buttonClass='nextStepButton' buttonType='button' />
      <Button value='test' buttonClass='exitButton' buttonType='reset' />
      <Button value='test' buttonClass='publishButton' buttonType='submit' />
      <Card imgSource='data:image/png;base64,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'>
        <h3>Title property</h3>
        <p>Description property</p>
        <span>2020-05-11</span>
      </Card>
      <Map />
      <BarChart>
        <h2>Visits Chart</h2>
      </BarChart>
      <PieChart>
        <h2>Favourite Chart</h2>
      </PieChart>
      <h3>Components</h3>
      <h4>Button with Icon</h4>
      <ButtonIcon icon='check' size='24px' />
      <h4>Radio Button</h4>
      <RadioButton options={['yes', 'no']} name='test' />
      <h4>Modal</h4>
      <Modal buttonText='Abril modal'>
        <p>Este es el conetido del modal</p>
      </Modal>
      <h4>Footer</h4>
      <Footer />
      <h4>Carousel</h4>
      {/* <Carousel images={images} /> */}
      <Input type='text' label='text' />
      <Input type='email' label='email' />
      <Input type='number' minValue='0' label='number' />
      <Input type='password' label='password' />
      <TextArea label='textArea' />
      <Select name='selector' label='selector' options={[{ value: 1, label: 'opcion1' }, { value: 2, label: 'opcion2' }, { value: 3, label: 'opcion3' }]} />
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
    </>
  );
}

export default DemoComponent;
