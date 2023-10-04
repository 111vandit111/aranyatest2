import React, { useState } from "react";
import "./Hero.css";
import {BsPlayCircle} from "react-icons/bs"
import {AiFillCloseCircle} from 'react-icons/ai'


const Hero = () => {
  const [vid ,setVid] = useState(false);
  return (
    <div className="container" id="Destination">
      <video id="background-video" autoPlay={true} loop={true} muted={true}>
        <source src="imgs/heroBg2.mp4" type="video/mp4" />
      </video>
      <div className="text">
      <div className="HeroMainText">
        <div className="heading">
          <h1>Heal, understand, and grow in the lap of Nature & luxury. 
</h1>
        </div>
        <div className="details">
          <p>
          Aranya awaits, ready to offer you an unforgettable experience that harmoniously blends nature's bounty and indulgent comfort. Come and explore our oasis, where every moment is tailored to nurture your body, mind, and soul.
          </p>
        </div>
        <div className="contactBtn" onClick={()=>{ setVid(true)}}><span><BsPlayCircle /></span></div>
      </div>
</div>



{
  vid && (
    <div className="YTVid">
    <div className="close btn" onClick={()=>{
setVid(false);
    }}><AiFillCloseCircle /></div>
    <div className="video-responsive">
    <iframe
      src={`https://www.youtube.com/embed/q-tImhS7-JM`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
</div>
  )
}
    </div>
  );
};

export default Hero;
