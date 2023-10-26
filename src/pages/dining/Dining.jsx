import React ,{useEffect} from 'react'
import NavbarPages from '../../components/navbar/NavbarPages'
import Footer from '../../components/footer/Footer'
import Post from '../../components/igPosts/Post'
import './Dining.css'
import menu from '/storiesMenu.pdf'

const Dining = () => {
    const data = [
        {link:"https://www.instagram.com/p/CtWwnf9S00H"},
        {link:"https://www.instagram.com/p/CupVp8FhiCY"},
        {link:"https://www.instagram.com/reel/CukEeb5B5Nx/"},
        {link:"https://www.instagram.com/p/Cxhxt7TOEiE"},
        {link:"https://www.instagram.com/p/CueX-OohVaL"},
        {link:"https://www.instagram.com/p/CuMsqp5NSGR"},
        {link:"https://www.instagram.com/p/CuAIJEzvg7t"},
        {link:"https://www.instagram.com/p/CtrlUNTBJrF"},
        {link:"https://www.instagram.com/p/CtW5He_hr7h"},
        {link:"https://www.instagram.com/p/Co9c7aQODxF"},
        {link:"https://www.instagram.com/reel/CvAXaIJBg3W"},
        {link:"https://www.instagram.com/reel/Cu4yuBthPhE"}
    ]
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);
  return (
    <div>
    <div className='page-Container'>
     <div className='exp navbar'><NavbarPages /></div>

     <div className='page-body'>
     <div className="Text">
        <h2 className="heading">
        Stories : Let's Make Some
        </h2>
        <p>
        Immerse yourself in 250-cover restaurant amidst rustic settings. We are passionate about bringing an organic touch to your dining experience. With our on-site farm, we cultivate fresh fruits, vegetables, and grains using sustainable, traditional methods. Our culinary offerings feature ingredients straight from our organic farm, ensuring a delightful feast for your senses. Every dish is a flavorful masterpiece, packed with wholesome goodness, a true testament to our dedication to health and freshness.

<br />
Time: 1:00 pm-1:00 am

<br />
<br />

<a href={menu} className="btn green smallText" download="Aranya Menu">
              Download Menu
            </a>
</p>


        
     </div>

     

     </div>


         <div className='igposts'>
           {data.map((link)=>{
            
            return(
                <Post links = {link.link} />
            )
           }
           )}
        
         </div>


        <Footer/>

</div>
    </div>
  )
}

export default Dining