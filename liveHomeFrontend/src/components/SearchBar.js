import React from 'react';

import styles from '../styles/components/SearchBar.module.sass';

const SearchBar = (props) => {
  return (
    <form className={styles.searchBar__container} onSubmit={props.handleSubmit}>
      <input className={styles.searchBar__container_input} type='text' placeholder='Search' name={props.name} value={props.value} />
      <button className={styles.searchBar__container_button} type='submit'>
        <img src='/static/searchIcon.png' alt='icon search button' />
      </button>
    </form>
  );
};

export default SearchBar;
