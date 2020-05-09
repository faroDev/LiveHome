import styles from '../styles/components/DemoComponent.module.sass';

import Input from './Input';
import TextArea from './TextArea';
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
      <p>Component: Input text</p>
      <Input type='text'/>
      <p>Component: Input email</p>
      <Input type='email'/>
      <p>Component: Input number</p>
      <Input type='number' minValue='0'/>
      <p>Component: Input password</p>
      <Input type='password'/>
      <p>Component: textarea</p>
      <TextArea />
      <p>Component: Header info dashboard</p>
      <HeaderInfoDashboard offers={20} visitors={52435} favourites={50}/>
      <p>Component: Preview Image</p>
      <PreviewImage />
      <p>Component: Search Bar</p>
      <SearchBar />
      <p>Component: Checkbox</p>
      <Checkbox text='prueba'/>
      <p>Component: Title info dashboard detail</p>
      <InfoDetailDashboard iconSrc='/static/visitors.png' title='Visitors' value='2543' />
      <InfoDetailDashboard iconSrc='/static/like.png' title='Favourites' value='23' />
    </>
  );
}

export default DemoComponent;
