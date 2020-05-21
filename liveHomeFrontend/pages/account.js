import React from 'react';
import Layout from '../src/components/Layout';
import styles from '../src/styles/pages/account.module.sass';
import Input from '../src/components/Input';
import useInputValue from '../src/hooks/useInputValue';
import FormField from '../src/components/FormField';
import Form from '../src/components/Form';
import Selector from './../src/components/Selector';
import Button from './../src/components/Button';

const account = () => {
  const name = useInputValue('');
  const lastName = useInputValue('');
  const id = useInputValue('');
  const phone = useInputValue('');
  const email = useInputValue('');
  const password = useInputValue('');
  const options = [{ value: 1, label: 'Cedula' }, { value: 2, label: 'Nit' }];

  return (
    <Layout>
      <div className={styles.acount__container}>
        <h1>My account</h1>
        <Form className={styles.form__account}>
          <FormField>
            <Input label='Name' type='text' name='name' required {...name} />
          </FormField>
          <FormField>
            <Input label='Last Name' type='text' name='name' required {...lastName} />
          </FormField>
          <FormField>
            <Selector label='ID Type' options={options} />
          </FormField>
          <FormField>
            <Input label='ID' type='text' name='name' required {...id} />
          </FormField>
          <FormField>
            <Input label='Phone Number' type='text' name='name' required {...phone} />
          </FormField>
          <FormField>
            <Input label='Email' type='text' name='name' required {...email} />
          </FormField>
          <FormField>
            <Input label='Password' type='password' name='name' required {...password} />
          </FormField>
          <FormField>
            <Button value='Update' buttonType='submit' buttonClass='greenButton' />
          </FormField>
        </Form>
      </div>
    </Layout>
  );
};
export default account;
