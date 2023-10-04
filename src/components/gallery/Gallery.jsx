import React, { useEffect ,useState ,useRef} from 'react'
import './Gallery.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, EffectFade, Autoplay } from 'swiper/modules';


const data = [
  {
    img:`imgs/mainRoom`,
    gallerHeading:"The Bedroom",
    Galtext:"A sanctuary of comfort and relaxation, where sweet dreams await you each night.",
  },
  {
    img:`imgs/extraBed`,
    gallerHeading:"An Extra Bedroom",
    Galtext:"Ideal for friends or family, offering the perfect space for shared moments and cherished memories.",
  },
  {
    img:`imgs/seatingArea`,
    gallerHeading:"Lounge",
    Galtext:"Unwind in style and luxury, surrounded by the beauty of nature, while basking in the warmth of our hospitality.",
  },
  {
    img:`imgs/bathTub`, 
    gallerHeading:"Jacuzzi / Bath Tub ",
    Galtext:"Indulge in privacy and tranquility, where you can rejuvenate and refresh at your own pace.",
  },
  {
    img:`imgs/openShower`,
    gallerHeading:"Open to Sky Shower",
    Galtext:"Immerse yourself in the soothing embrace of nature's elements, embracing a unique and invigorating experience.",
  },
  {
    img:`imgs/bawri`,
    gallerHeading:"The Calmness of 'Bauri'",
    Galtext:"A stepwell Themed pool connected to the back of all the 5 Villas, Enjoy the cool breeze from ancient times, embracing serenity at its finest.",
  },
  {
    img:`imgs/mudBath`,
    gallerHeading:"Mud-bath Area",
    Galtext:"Reconnect with ancient rituals as you rejuvenate your skin and body, embracing the therapeutic qualities of mud.",
  },
  {
    img:`imgs/readingArea`,
    gallerHeading:"Study",
    Galtext:"Get lost in the world of literature amidst the serene ambiance of our curated reading spot.",
  },
  {
    img:`imgs/tBed`,
    gallerHeading:"Bath Bed",
    Galtext:"Experience ultimate relaxation and bliss as our skilled therapists attend to your body's needs.",
  },
  {
    img:`imgs/porch`,
    gallerHeading:"Porch Sitting Area ",
    Galtext:"Surrounded by Lush Greenry Embrace the harmony of nature from the comfort of your private porch, a perfect spot to unwind and find peace.",
  },

]


const Gallery = () => {
  const [size , setSize] = useState("");
  const [menu,SetMenu] = useState(data);

const changeImg = () =>{
  if(window.screen.width<=768) setSize("small");
  else if (window.screen.width>768 && window.screen.width<1025) setSize("medium");
  else setSize("large");

}

useEffect(()=>{
  changeImg();
  window.addEventListener("resize",changeImg);
  console.log(size);
  
  },[])



  return (
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        effect='fade'
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation,EffectFade , Autoplay]}
        className="mySwiper"
      >
    { menu.map((el)=>{
      
      return(
        <SwiperSlide>
      <div className="GalleryContainer">
      <div className="img">
<img src={`${el.img}${size}.avif`} alt="pic1" />
      </div>

      <div className="GalleryText">
      <div className="GalleryTextContainer">
          <h2 className="GalleryHeading">
          {el.gallerHeading}
          </h2>
          <p className="Galtext">
           {el.Galtext}
         </p>
          </div>
      </div>

  </div>

  </SwiperSlide>
    )})}
    </Swiper>
   

  )
}

export default Gallery