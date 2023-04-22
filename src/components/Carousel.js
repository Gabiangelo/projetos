import React from 'react';
import {useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Navigation } from "swiper";
import { SwiperButtons } from './SwiperButton.js';

import Cards from "./Card.js";

import './Carousel.css'

export default function App() {

  const [result, setResult] = useState([]);

  fetch('http://localhost:5000/data', {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((resp) => resp.json())
    .then((data) => { setResult(data)})
    .catch((err)=> console.log(err))

  return (
    <div className="container-carousel">
      <Swiper
        slidesPerView={4}
        pagination={{
          type: "fraction",
        }}
        modules={[Navigation]}
      >
          {result.map((item) => (
              <SwiperSlide>
                <Cards
                  id={item.id}
                  name={item.name}
                  path={item.path}
                />
                </SwiperSlide>
          ))}
        <SwiperButtons />
      </Swiper>
    </div>
  );
}
