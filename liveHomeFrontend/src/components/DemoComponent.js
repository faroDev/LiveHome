import styles from '../assets/styles/components/DemoComponent.module.sass';
import Header from './Header';
import Button from './Button';

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
    </>
  );
}

export default DemoComponent;
