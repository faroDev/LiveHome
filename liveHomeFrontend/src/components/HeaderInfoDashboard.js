import React from 'react';

//styles
import styles from '../styles/components/HeaderInfoDashboard.module.sass';

const HeaderInfoDashboard = (props) => {
  return(
    <div className={styles.dashboard__header}>
      <div className={styles.dashboard__header_item}>
        <div className={styles.dashboard__header_itemDetail}>
          <img src='/static/realState.png'/>
          <p>{props.offers}</p>
        </div>
        <div>
          <p className={styles.dashboard__header_textCatetgory}>Offers</p>
        </div>
      </div>
      <div className={styles.dashboard__header_item}>
        <div className={styles.dashboard__header_itemDetail}>
          <img src='/static/visitors.png'/>
          <p>{props.visitors}</p>
        </div>
        <div>
          <p className={styles.dashboard__header_textCatetgory}>Visitors</p>
        </div>
      </div>
      <div className={styles.dashboard__header_item}>
        <div className={styles.dashboard__header_itemDetail}>
          <img src='/static/like.png'/>
          <p>{props.favourites}</p>
        </div>
        <div>
          <p className={styles.dashboard__header_textCatetgory}>Favourites</p>
        </div>
      </div>
    </div>
  );
}
export default HeaderInfoDashboard;