import React from 'react';
import Button from './Button';
import SearchBar from './SearchBar';
import useInputValue from './../hooks/useInputValue';
import styles from '../styles/components/FilterBar.module.sass';

const FilterBar = () => {
  const search = useInputValue('');
  return (
    <div className={styles.__container}>
      <Button value='Filter' buttonType='search' buttonClass='grayLinearButton' />
      <SearchBar name='search' {...search} />
    </div>
  );
};

export default FilterBar;
