import React from 'react';

//styles
import styles from '../styles/components/InfoDetailDashboard.module.sass';

const InfoDetailDashboard = (props)=>{
  return(
    <div className={styles.category__container}>
      <div className={styles.category__container_icon}>
        <img src={props.iconSrc} />
      </div>
      <div className={styles.category__container_title}>
        <p>{props.title}: </p>
      </div>
      <div className={styles.category__container_value}>
        <p>{props.value}</p>
      </div>
    </div>
  )
}

export default InfoDetailDashboard;