import React from 'react'
import "./WWO.css"

const WWO = () => {
  return (
    <div className="offerContainer" id='wellness'>
        <h2 className="heading">
        Rejuvenate at Aranya: A Luxurious Oasis of Wellness
        </h2>
        <div className="BaseOffer">
        <div className="offer box1">
            <div className="img">
<img src="imgs/yoga.jpg" alt="yoga" width={292} height={292}/>
            </div>
            <div className="details">
                <h3 className="det-heading">
                Yoga
                </h3>
                <p className="det-text">
                Reconnect with Nature and Yourself at our Yoga Retreat: Discover Harmony and Inner Balance
            </p>
            </div>
            </div>

            <div className="offer box2">
            <div className="img">
<img src="imgs/tBedsmall.avif" alt="Thererpy Bed" width={292} height={292}/>
            </div>
            <div className="details">
                <h3 className="det-heading">
                Therapies 
                </h3>
                <p className="det-text">
                Indulge in Ultimate Relaxation: Experience Blissful Therapies by Skilled Experts</p>
            </div>
            </div>

            <div className="offer box1">
            <div className="img">
<img src="imgs/bathTubsmall.avif" alt="ayurved" width={292} height={292}/>
            </div>
            <div className="details">
                <h3 className="det-heading">
                Jacuzzi
                </h3>
                <p className="det-text">
                Rejuvenate Your Senses: Experience the Bliss of Jacuzzi for Relaxation and Unwinding                </p>
            </div>
            </div>

            <div className="offer box2">
            <div className="img">
<img src="imgs/hammam.jpg" alt="ayurved" width={292} height={292}/>
            </div>
            <div className="details">
                <h3 className="det-heading">
                Hammam
                </h3>
                <p className="det-text">
                Soothe Your Senses: Experience the Luxurious Benefits of Hammam for Ultimate Pampering

                </p>
            </div>
            </div>
        </div>
        

        
    </div>
  )
}

export default WWO