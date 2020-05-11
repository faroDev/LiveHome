import styles from '../styles/components/DemoComponent.module.sass';

import Input from './Input';
import TextArea from './TextArea';
import Selector from './Selector';
import HeaderInfoDashboard from './HeaderInfoDashboard';
import PreviewImage from './PreviewImage';
import SearchBar from './SearchBar';
import Checkbox from './Checkbox';
import InfoDetailDashboard from './InfoDetailDashboard';

function DemoComponent () {
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
    </>
  );
}

export default DemoComponent;
