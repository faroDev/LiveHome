import styles from '../styles/components/DemoComponent.module.sass';
import ButtonIcon from './ButtonIcon';
import RadioButton from './RadioButton';
import Modal from './Modal';
import Select from './Select';

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
    </>
  );
}

export default DemoComponent;
