import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import {Navigation } from "swiper";

import Cards from "./Card.js";
import {data} from "../data/exe_data.js";

import { SwiperButtons } from './SwiperButton.js';

import './Carousel.css'

export default function App() {
    const card = data.map(item => (
        <SwiperSlide><Cards
        key={item.id}
        name={item.name}
        to={item.to}
       /></SwiperSlide>
      ))
  return (
    <div className="container-carousel">
      <Swiper
        slidesPerView={4}
        pagination={{
          type: "fraction",
        }}
        modules={[Navigation]}
      >
        {card}
        <SwiperButtons />
      </Swiper>
    </div>
  );
}
