import React from 'react';
import styles from '../styles/components/Carousel.module.sass';
import CarouselComponent from 'react-multi-carousel';

function Carousel ({ images = [] }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 992 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1200, min: 768 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 768, min: 576 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1
    }
  };

  return (
    <CarouselComponent
      responsive={responsive}
      ssr
      infinite
      autoPlay
      autoPlaySpeed={3000}
      keyBoardControl
      customTransition='all .5'
    >
      {images.map((item, key) => {
        return (
          <div key={key}>
            <img className={styles.image} src={item.url} alt={item.title} />
          </div>
        );
      })}
    </CarouselComponent>
  );
}

export default Carousel;
