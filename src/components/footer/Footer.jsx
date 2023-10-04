import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import {AiFillInstagram , AiFillMail} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='container-footer'>
      <div className="aranya">
<div className="Footheading">
Aranya
</div>
<div className="details">
For an extraordinary staycation that leaves you feeling renewed and rejuvenated, book your escape to Aranya today. Let the magic of this enchanting retreat revitalize your senses and elevate your vacation to new heights of serenity and bliss. Welcome to Aranya, where nature's embrace and luxurious hospitality await your arrival.
</div>
      </div>
      <div className="webLinks">
      <li className="footLink"><a href="../#Destination">Destination</a></li>
        <li className="footLink"><Link to = {'../aranyatest2/about'}> About </Link></li>
        <li className="footLink"><Link to="../aranyatest2/stay">Stay</Link></li>
        <li className="footLink"><a href="../#Destination">Contact</a></li>
      </div>
      <div className="FooterMedia">
      <div className="Footheading">
         Find Us
      </div>

      <div className="FootSocials">
<div className="mediaLink">
<a href="https://www.instagram.com/aranyabystories/?hl=en"><AiFillInstagram /></a>
</div>
<div className="mediaLink">
<a href="mailto:aranyabystories@gmail.com"><AiFillMail /></a>
</div>
      </div>
      </div>


    </div>
  )
}

export default Footer