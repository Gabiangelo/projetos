import React from 'react';
import { useSwiper } from 'swiper/react';

import { FaArrowLeft,FaArrowRight } from 'react-icons/fa';

export const SwiperButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <button onClick={() => swiper.slidePrev()}>< FaArrowLeft/></button>
      <button onClick={() => swiper.slideNext()}><FaArrowRight/></button>
    </div>
  );
};