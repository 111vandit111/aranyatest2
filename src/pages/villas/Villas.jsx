import React from 'react'
import './Villas.css'
import NavbarPages from '../../components/navbar/NavbarPages'
import Footer from '../../components/footer/Footer'
import VillasSlider from '../../components/villasSlider/VillasSlider'
const prithvi =[
  {img:'rooms/prithvi1.jpg'},{img:'rooms/prithvi2.jpg'},{img:'rooms/prithvi3.jpg'},{img:'rooms/prithvi4.jpg'},{img:'rooms/prithvi5.jpg'}
]
const vayu =[
  {img:'rooms/vayu1.jpg'},{img:'rooms/vayu2.jpg'},{img:'rooms/vayu3.jpg'},{img:'rooms/vayu4.jpg'},{img:'rooms/vayu5.jpg'}
]

const jal =[
  {img:'rooms/jal1.jpg'},{img:'rooms/jal2.jpg'},{img:'rooms/jal3.jpg'},{img:'rooms/jal4.jpg'},{img:'rooms/jal5.jpg'}
]

const vyom =[
  {img:'rooms/vyom1.jpg'},{img:'rooms/vyom2.jpg'},{img:'rooms/vyom3.jpg'},{img:'rooms/vyom4.jpg'},{img:'rooms/vyom5.jpg'},
]

const agni =[
  {img:'rooms/agni1.jpg'},{img:'rooms/agni2.jpg'},{img:'rooms/agni3.jpg'},{img:'rooms/agni4.jpg'},{img:'rooms/agni5.jpg'}
]


const Villas = () => {
  return (
    <div className="villaContainer">
      <NavbarPages />



<div className="villaText">
  <div className="Heading">
  Embark on a Journey of Enchanting Experiences at Aranya: Where Each Villa unveils a Unique Tale.

  </div>
  <p className="villaSubText">
   Aranya's Five Element Villas offer an unparalleled experience, with each villa thoughtfully named after the five elements of life, ensuring you the most unforgettable and qualitative days of your life. Discover a haven of opulence and rejuvenation, where nature's embrace harmonizes with luxurious amenities.
  </p>
</div>




<div className="villaBox">
<div className="villas">
    <div className="slider">
<VillasSlider data={prithvi}/>
    </div>
    <div className="detailsOfVilla">
<div className="VillaName">
{`Prithvi`}
</div>
<p className="villaStory">
<div className="Translate">The Earth</div>
Earth represents stability, grounding, and nourishment. It symbolizes the solid and material aspects of life. In various belief systems, it is associated with qualities like strength, patience, and abundance.
Step into the Prithvi Villa at Aranya, where tranquility and connection await. Named after the grounding element of Earth (Prithvi), this retreat offers a soothing escape like no other. The cozy Main Bedroom welcomes you with a sense of calm and comfort, while earthy tones and hints of greenery bring the beauty of nature inside. In the private Closed Bathroom/Shower, you can rejuvenate your senses and restore balance. Experience the ancient healing practice of mud therapy at the unique Mud-bath area, nourishing and detoxifying your body. Find solace at the serene Reading Station or unwind in the gentle embrace of the Porch Sitting Area, where you can connect with nature's soothing embrace. The Earth Villa is a tranquil haven that invites you to ground yourself and rediscover harmony with the world around you. 

</p>
    </div>
    <a href="#" className="bookingLink">

    </a>
  </div>

  <div className="villas">
    <div className="slider">
<VillasSlider data={jal}/>
    </div>
    <div className="detailsOfVilla">
<div className="VillaName">
{`Jal`}
</div>
<p className="villaStory">
<div className="Translate">The Water</div>
Water embodies the fluid, flowing, and emotional aspects of life. It is often linked to emotions, intuition, adaptability, and purification. Water is seen as a source of life and renewal.
Step into the soothing Water (Jala) Villa at Aranya, where tranquility flows like a gentle stream. This serene sanctuary embodies the element of water, inviting you to relax and find solace. The Main Bedroom's calming hues soothe the senses, while the private Closed Bathroom/Shower offers a revitalizing experience. Discover the therapeutic power of water in the Hydrotherapy Zone, and unwind at the serene Reading Station. Step outside to the Porch Sitting Area and let nature's rhythmic sounds envelop you. Embrace the tranquility of the Water Villa and find renewal in its gentle embrace. 

</p>
    </div>
    <a href="#" className="bookingLink">

    </a>
  </div>

  <div className="villas">
    <div className="slider">
<VillasSlider data={agni}/>
    </div>
    <div className="detailsOfVilla">
<div className="VillaName">
{`Agni`}
</div>
<p className="villaStory">
<div className="Translate">The Fire</div>
Fire symbolizes transformation, energy, and illumination. It is connected to passion, creativity, willpower, and the power to change and purify. Fire is seen as a force of change and a catalyst for transformation.
Embrace the vibrant energy of the Fire (Agni) Villa at Aranya, where passion and vitality come alive. Fiery hues and invigorating accents create an energizing ambiance. The Main Bedroom exudes comfort and zeal, while the private Closed Bathroom/Shower offers a revitalizing experience. Ignite your inner fire in the exclusive Yoga & Meditation Vyom, connecting with your breath and inner strength. Relax at the cozy Reading Nook or step outside to the Porch Sitting Area to bask in the fiery essence of nature. Experience a rejuvenating escape at Aranya's Fire Villa, where the power of fire fuels your zest for life. 

</p>
    </div>
    <a href="#" className="bookingLink">

    </a>
  </div>

  <div className="villas">
    <div className="slider">
<VillasSlider data={vayu}/>
    </div>
    <div className="detailsOfVilla">
<div className="VillaName">
{`Vayu`}
</div>
<p className="villaStory">
<div className="Translate">The Air</div>
Air represents movement, freedom, and intellect. It is associated with qualities like communication, intellect, inspiration, and the ability to connect with others. Air is seen as a life-giving force that sustains all living beings.
Discover serenity at the Air (Vayu) Villa in Aranya. With an airy ambiance and soft tones, this tranquil retreat welcomes you to experience a sense of freedom and openness. The Main Bedroom offers a peaceful haven, while the private Closed Bathroom/Shower ensures refreshing moments. Embrace the essence of air in the Yoga & Meditation Vyom and find peace within. Enjoy quiet contemplation at the serene Reading Nook. Step outside to the Porch Sitting Area, feeling the gentle breeze and connecting with nature's soothing elements. 
</p>
    </div>
    <a href="#" className="bookingLink">

    </a>
  </div>

  <div className="villas">
    <div className="slider">
<VillasSlider data={vyom}/>
    </div>
    <div className="detailsOfVilla">
<div className="VillaName">
{`Vyom`}
</div>
<p className="villaStory">
<div className="Translate">The Sky </div>
Vyom is the element that transcends the physical and connects all other elements. It represents expansion, openness, and the infinite possibilities of existence. Vyom is associated with consciousness, spirituality, and the potential for growth and change.
Welcome to the Akasha Villa at Aranya, a sanctuary of boundless possibilities and serenity. Named after the element of Vyom or Ether (Akasha), this villa invites you to explore the vastness within. Neutral tones and minimalist design create a calming ambiance, while the Main Bedroom offers a peaceful retreat for rejuvenation. The private Closed Bathroom/Shower provides a moment of blissful escape. Discover inner harmony in the contemplative Yoga & Meditation Vyom, and find inspiration at the serene Reading Nook. Step outside to the Porch Sitting Area and embrace the endless sky. Immerse yourself in the essence of Vyom at Aranya's Akasha Villa. 

</p>
    </div>
    <a href="#" className="bookingLink">

    </a>
  </div>

</div>



      <Footer />
    </div>
  )
}

export default Villas