import React from 'react';

import Icon from './Icon';

import styles from '../../src/styles/components/Favbutton.module.sass';

const FavButton = ({ liked, onClick }) => {
  return (
    <span className={styles.favbutton} onClick={onClick}>
      <Icon name='heart' stroke={liked ? 'red' : '#4424A6'} fill={liked ? 'red' : 'white'} />
    </span>
  );
};

export default FavButton;