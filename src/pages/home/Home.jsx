import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import DetailBox from '../../components/detailBox/DetailBox'
import AboutUs from '../../components/aboutUs/AboutUs'
import Gallery from '../../components/gallery/Gallery'
import WWO from '../../components/offer/WWO'
import OfferGallery from '../../components/offerGallery/OfferGallery'
import Contact from '../../components/contactUs/Contact'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />

        {// add destination
        }
        <Hero />
        <DetailBox />
        <AboutUs />
        <Gallery />
        <WWO />
        <OfferGallery />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home