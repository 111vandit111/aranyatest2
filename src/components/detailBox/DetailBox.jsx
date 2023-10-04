import React from "react";
import "./DetailBox.css";
import { AiOutlinePhone ,AiFillMail} from "react-icons/ai";
import {TbMapSearch} from "react-icons/tb"

const DetailBox = () => {
  return (
    <div className="detailBox" id="about">
      

      <div className="BoxText">
      <div className="details-textBox">
        <h2 className="BHeading">Explore the Magnificent 'Pink City' of Jaipur, Capital of Rajasthan</h2>
        <div className="BDetails">
          <p>
          With its grand palaces, majestic forts, and intricate architecture, Jaipur offers a glimpse into the bygone era of Rajput valor and chivalry. Discover the magnificent Amer Fort, perched on a hilltop, offering breathtaking panoramic views of the Aravalli Hills. Marvel at the stunning Hawa Mahal, the Palace of Winds, adorned with intricate latticework.

</p><p>
Aranya Hotel/resort in Rajasthan is 45 minutes from Jaipur and a 60- minute drive from Jaipur International Airport. </p></div>


          <div className="BIcons">
          <div className="iconBox"> 
            <div className="icon">
              <TbMapSearch />
            </div>
            <a href="https://goo.gl/maps/JSA6KgAeMREEqfgw6" target="_blank">
            <div className="IconHeading" >Aranya By Stories</div>
            </a>
          </div>
          <div className="iconBox"> 
            <div className="icon">
              <AiOutlinePhone />
            </div>
            <a  href="tel:+919352265004">
            <div className="IconHeading"> +91 9352265004</div>
            </a>
          </div>
          <div className="iconBox">
            <div className="icon">
              <AiFillMail />
            </div>
            <a  href="mailto:aranyabystories@gmail.com" target="_blank">
            <div className="IconHeading">aranyabystories@gmail.com</div>
            </a>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBox;
