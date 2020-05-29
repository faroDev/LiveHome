import React from 'react';

import SearchIcon from '../assets/statics/images/searchIcon.png'

import styles from '../styles/components/SearchBar.module.sass';

const SearchBar = (props) => {
  return (
    <form className={styles.searchBar__container} onSubmit={props.handleSubmit}>
      <input
        className={styles.searchBar__container_input} type='text' placeholder='Search' name={props.name} value={props.value}
        onChange={props.onChange}
      />
      <button className={styles.searchBar__container_button} type='submit'>
        <img src={SearchIcon} alt='icon search button' />
      </button>
    </form>
  );
};

export default SearchBar;
