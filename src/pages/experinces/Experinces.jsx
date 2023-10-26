import React, { useState } from 'react'
import Footer from '../../components/footer/Footer'
import NavbarPages from '../../components/navbar/NavbarPages'
import './Experince.css'
import Activity from '../../components/activity/Activity';



const data = [
  {
   id:1, title : 'Hiking in the Aravalli Hills',
 desc :'Embark on an adventurous journey through the rugged terrain of the Aravalli Hills, where hiking trails reveal breathtaking vistas at every turn. Explore the ancient beauty of this mountain range, steeped in history and natural wonder.',
img : 'activity/hiking.jpg'
 ,},{
id:2,  title : 'Jeep Safari',
 desc :'Experience the thrill of adventure while discovering the hidden treasures of the wilderness.',
img : 'activity/safari.jpg'
 ,},
 {
  id:3,title : 'Off-Roading',
 desc :'Experience the excitement of off-roading as you conquer challenging terrains and rugged landscapes.',
img : 'activity/offroading.jpg'
 ,},
 {
  id:4,title : 'Heritage Walk',
 desc :`Explore Jaipur's heritage on a captivating walk, visiting Panna Meena Ka Kund, Amer Fort, Jaigarh Fort, and sunset at Nahargarh Fort, each revealing the rich history of Rajasthan.`,
img : 'activity/heritage.jpg'
 ,},
 {
  id:5,title : 'Biking Tour ',
 desc :'Discover the vibrant colors of Jaipur on a thrilling biking tour, with stops at iconic landmarks like the Hawa Mahal and the Albert Hall Museum. Enjoy a delicious breakfast break at Masala Chowk, and recharge with a soothing foot massage and Champi at Aranya – the perfect blend of culture, cuisine, and relaxation.',
img : 'activity/biking.jpg'
 ,},
 {
  id:6,title : 'Journey through the Ancient Temple' ,
 desc :'Embark on a spiritual journey through the sacred temples of Jaipur- Khole Ke Hanuman Ji, Galta Ji and Chulgiri, delving into their profound spiritual aura and historical significance.',
img : 'activity/temple.jpg'
 ,},
 {
  id:7,title : 'Horse Riding ',
 desc :`Experience the thrill of horse riding amidst the scenic beauty of Aranya's campus`,
img : 'activity/horse.jpg'
 ,}, {id:8,
  title : 'Farm to the Table',
 desc :`Delight in regional specialties sourced locally, paired with ingredients fresh from our organic farm, and savor a traditional, plant-based menu that celebrates the land's seasonal flavors, all within a serene setting.`,
img : 'activity/farm.jpg'
 ,}, {id:9,
  title : 'Romantic Dining' ,
 desc :`Create cherished memories with intimate dinner dates that ignite romance and kindle the sparks of love. `,
img : 'activity/dining.jpg'
 ,}, {id:10,
  title : 'Picnic at the Garden ',
 desc :`Offering a stunning view of the natural landscape, immerse yourself in a one-of-a-kind experience. Watch the sunset with your loved ones in a charming, elegant, and classy setting during an outdoor picnic.`,
img : 'activity/picnic.jpg'
 ,}
]

const Experinces = () => {
  const [flag,setFlag] = useState(true);
  return (
    <div className='page-Container'>
     <div className='exp navbar'><NavbarPages /></div>


<div className='page-body'>
     <div className="Text">
        <h2 className="heading">
        Welcome to Aranya: Your Gateway to Tranquility and Adventure
        </h2>
        <p>
        Aranya isn't just a rejuvenation center, it's a canvas for crafting your own adventure. Nestled amidst the awe-inspiring Aravalli Hills.The sanctuary offers a serene backdrop for self-discovery and exploration. Here, you have the freedom to embark on thrilling hikes, indulge in invigorating off-roading, and savor the beauty of heritage walks. Create your own narrative as you venture into Jaipur's historic gems and experience the thrill of biking tours. With Aranya as your base, the possibilities are endless. Come, paint your own masterpiece of relaxation and excitement amidst nature's embrace.
        </p>
        
     </div>

     </div>

     <div className="activities">
      {
        data.map((item )=>{
          return (
            <div className="">
              <Activity item={item} key={item.id} flag={item.id} />
            </div>
           
          )
        })
      }
     </div>
    <Footer />
    </div>
  )
}

export default Experinces