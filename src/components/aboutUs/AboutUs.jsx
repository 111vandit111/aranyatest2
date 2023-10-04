import { React } from "react";
import "./AboutUs.css";
import { Link } from "react-router-dom";

const AboutUs = () => {


  return (
    <div className="aboutCont">
      <div className="backgroundImg 1" />
      <div className="About-container">
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
          <h1 className="heading">Escape to Aranya: Embrace Nature, Luxury, and Wellness in Your Rejuvenating Staycation </h1>
<p className="About-details">
Welcome to Aranya, your ultimate destination for a transformative staycation, where nature's harmony and warm hospitality await you. Experience a unique retreat that seamlessly intertwines nature and luxury, ensuring a rejuvenating escape like no other. Let us immerse you in a world of tranquility and wellbeing, where every aspect of your stay is designed to revitalize your mind, body, and soul.

          </p>
          <p>
          <Link to={"./about"}> <button className="btn green"> 
              read more
           
            </button> </Link>
          </p>
          
        
        </div>
      </div>


<div className="lowerSec">
      <div className="backgroundImg 2" />
      <div className="About-container">


      <div className="about-text bottom">
          <h1 className="heading">Embark on a Journey of Enchanting Experiences at Aranya: Where Each Villa unveils a Unique Tale</h1>
<p className="About-details">
Aranya's Five Element Villas offer an unparalleled experience, with each villa thoughtfully named after the five elements of life, ensuring you the most unforgettable and qualitative days of your life. Discover a haven of opulence and rejuvenation, where nature's embrace harmonizes with luxurious amenities.

          </p>
          <p>
          <Link to={"./stay"}> <button className="btn green"> 
              read more
        
            </button>    </Link>
          </p>
          
        
        </div>

        <div className="About-imgs">
          <div
            className="upper"
          >
            <img
              src="imgs/aboutUs.jpg"
              alt="img1"
            />
          </div>
        </div>
        
      </div>
</div>

    </div>
  );
};


export default AboutUs;
