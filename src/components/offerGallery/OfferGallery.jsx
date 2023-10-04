import React,{useEffect ,useState} from 'react'
import './OfferGallery.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const data = [
    {
      img:`imgs/massage.jpg`,
      heading:"Therapy",
      desc:"Unwind and let go of stress with our rejuvenating massage therapy. Our skilled therapists combine various techniques to release tension, improve blood circulation, and promote overall well-being. Indulge in a holistic experience that leaves your body and mind feeling lighter and refreshed.",
    },
    {
        img:`imgs/jacuuzi.jpg`,
        heading:"Jacuzzi",
        desc:"Immerse yourself in the soothing warmth of our Jacuzzi, providing muscle relaxation and alleviating tension. Let the massaging jets target specific areas, offering a therapeutic escape for your body and mind. Whether seeking tranquility or post-workout recovery, our Jacuzzi is a blissful retreat.",
      },
      {
        img:`imgs/mudBathsmall.avif`,
        heading:"Mud Bath",
        desc:"Experience the ancient practice of mud-baths, rich in minerals like silica, magnesium, and calcium. Improve blood circulation, exfoliate your skin, and promote detoxification while enjoying muscle relaxation. Reveal refreshed and rejuvenated skin with our invigorating mud-bath treatment.",
      },
      {
        img:`imgs/food.jpg`,
        heading:"Organic Cuisine",
        desc:"Indulge in our delectable dishes made from organically grown ingredients. Sourced from local organic farms, our produce is free from harmful chemicals. Savor healthier and tastier options, prioritizing nutrient-rich soil, biodiversity, and environmental sustainability.",
      },
      {
        img:`imgs/yoga.jpg`,
        heading:"Yoga Retreat",
        desc:"Discover the transformative power of yoga amidst nature's beauty. Led by experienced trainers, our sessions enhance physical fitness, mindfulness, and stress reduction. Embrace inner peace as you connect with your body and mind in our serene setting.",
      },
      {
        img:`imgs/hammam.jpg`,
        heading:"Hammam Bliss",
        desc:"Escape from daily stresses with the rejuvenating Hammam experience. Boost your immune system, stimulate blood flow, and awaken your senses with our pampering ritual. Relax your mind and body, indulging in a tranquil retreat.",
      },
      {
        img:`imgs/bawrismal2l.jpg`,
        heading:"Bauri",
        desc:"Central to our five villas lies 'Bauri,' a long corridor of steps descending to the water level. Experience peace as you swim in the refreshing water and unwind amidst authentic Rajasthani touches. Enjoy the cool breeze from ancient times, embracing serenity at its finest.",
      },
      {
        img:`imgs/oil.JPG`,
        heading:"Culinary Delight ",
        desc:"Highlighting our commitment to health and freshness, Aranya takes pride in boasting our very own flour mill, meticulously grinding at a gentle 35 rpm to retain essential nutrients without overheating the flour. This process ensures that the flour remains nutritious and alive, ready to bring vitality to your dining experience.In addition to our flour mill, Aranya features a cutting-edge cold press oil machine that preserves the temperature and nutrients in the oils we offer. By avoiding high-heat methods, we maintain the natural goodness of the oils, enhancing their health benefits and enriching the flavors.",
      }
]

function OfferGallery() {
    const [menu,SetMenu] = useState(data);
  return (
    <Swiper
    slidesPerView={1}
    spaceBetween={30}
    loop={true}
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Pagination, Navigation,Autoplay]}
    className="mySwiper"
  >
{console.log(menu)}
  {menu.map((el)=>{

    return (
        <SwiperSlide>
    <div className="OfferConatiner">
    <div className="Offerimg">
    <img src={el.img} alt="" srcset="" />
    </div>
    <div className="offerDetails">
        <div className="OfferHeading">
        <h2> {el.heading}</h2>

        </div>

        <div className="OfferText">
        <p>{el.desc} </p></div>
    </div>

    </div>
    </SwiperSlide>
    )
  })}
        
    </Swiper>
  )
  
}

export default OfferGallery