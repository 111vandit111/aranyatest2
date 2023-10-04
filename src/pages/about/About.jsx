import React from 'react'
import './About.css';
import NavbarPages from '../../components/navbar/NavbarPages'
import Footer from '../../components/footer/Footer';
const About = () => {
  return (
    <div className="About-page-Container">
      <NavbarPages />

      <div className="AboutUS">


      <div className="aboutusText">
        <div className="Heading">
        Escape to Aranya:<br /> Embrace Nature, Luxury, and Wellness in Your Rejuvenating Staycation
        </div>
        <div className="About-Details">
        <p>Welcome to Aranya, your ultimate destination for a transformative staycation, where nature's harmony and warm hospitality await you. Experience a unique retreat that seamlessly intertwines nature and luxury, ensuring a rejuvenating escape like no other. Let us immerse you in a world of tranquility and wellbeing, where every aspect of your stay is designed to revitalize your mind, body, and soul.
        </p></div>

        </div>



        <div className="lowerSec AboutPage">
      <div className="backgroundImg 2" />
      <div className="About-container">


      <div className="about-text bottom">
          <h1 className="heading">Nature's Bounty on Your Plate:</h1>
<p className="About-details">
At Aranya, we take pride in offering an organic touch with our very own farm, where we cultivate fresh fruits, vegetables, and grains using sustainable and traditional farming methods. Indulge in an exceptional dining experience with culinary offerings straight from our organic farm, promising a feast for your senses. Each dish is not only delectable but also brimming with wholesome goodness, reflecting our commitment to health and freshness.      </p>
        </div>

        <div className="About-imgs">
          <div
            className="upper"
          >
            <img
              src="imgs/food2.jpg"
              alt="img1"
            />
          </div>
        </div>
        
      </div>
</div>



<div className="backgroundImg 1" />
      <div className="About-container AboutPage">
        <div className="About-imgs">
          <div
            className="upper"
          >
            <img
              src="imgs/aboutUs2.jpg"
              alt="img1"
            />
          </div>
        </div>
        <div className="about-text bottom">
          <h1 className="heading">Wellness Beyond Compare: </h1>
<p className="About-details">
Highlighting our commitment to health and sustainability, we have our very own flour mill, gently grinding at 35 rpm to retain essential nutrients without overheating the flour. Our cold press oil machine ensures that the oils we offer preserve their temperature and nutrients, providing you with the utmost nourishment in every meal.
</p>     
        </div>
      </div>


      <div className="lowerSec AboutPage">
      <div className="backgroundImg 2" />
      <div className="About-container">


      <div className="about-text bottom">
          <h1 className="heading">Preserving Nature's Nutrients:
</h1>
<p className="About-details">
At Aranya, we take pride in offering an organic touch with our very own farm, where we cultivate fresh fruits, vegetables, and grains using sustainable and traditional farming methods. Indulge in an exceptional dining experience with culinary offerings straight from our organic farm, promising a feast for your senses. Each dish is not only delectable but also brimming with wholesome goodness, reflecting our commitment to health and freshness.      </p>
        </div>

        <div className="About-imgs">
          <div
            className="upper"
          >
            <img
              src="imgs/delight.jpg"
              alt="img1"
            />
          </div>
        </div>
        
      </div>
</div>



<div className="backgroundImg 1" />
      <div className="About-container AboutPage">
        <div className="About-imgs">
          <div
            className="upper"
          >
            <img
              src="imgs/stay.jpg"
              alt="img1"
            />
          </div>
        </div>
        <div className="about-text bottom">
          <h1 className="heading">Plan Your Rejuvenating Staycation Today:
 </h1>
<p className="About-details">
Escape to Aranya, where a blissful fusion of nature, luxury, and wellness awaits you. Immerse yourself in the serene surroundings and experience the epitome of relaxation and rejuvenation. Unwind, refresh, and revitalize amidst the embrace of nature's bounty and warm hospitality. Plan your staycation at Aranya and embark on a journey of total wellbeing. Book now for an unforgettable experience like no other.
</p>       

       <a className='btn green' href='tel:+919352265004'>
        Book Now
       </a>

        </div>
      </div>
      </div>





      <Footer />
    </div>
  )
}

export default About