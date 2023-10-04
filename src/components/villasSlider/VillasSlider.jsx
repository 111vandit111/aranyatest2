import './VillasSlider.css';
import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

const VillasSlider = (data) => {
    const [menu,SetMenu] = useState(data.data);


    return (
      <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Navigation,Autoplay]}
      className="mySwiper"
    > 
    {console.log(data)}
    {menu.map((el)=>{
  
      return (
          <SwiperSlide>
      <img src={el.img} />
      </SwiperSlide>
      )
    })}
          
      </Swiper>
    )
}

export default VillasSlider