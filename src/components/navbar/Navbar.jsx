import {React,useEffect,useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { ImCross } from 'react-icons/im';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrl , setScrl] = useState("");

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setScrl("active")
    } else {
      setScrl("")
    }
  }

  useEffect(()=>{
    changeBackground();
    window.addEventListener("scroll",changeBackground);
  },[])

  return (
    <nav className={`app__navbar ${scrl}`} >
      <div className="app__navbar-logo">
      <Link to={"#Destination"} ><img src={"imgs/logo.png"} alt="app__logo" /></Link>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#Destination">Destination</a></li>
        <li className="p__opensans"><Link to={"about"}>About</Link></li>
        <li className="p__opensans"><Link to="stay">Stay</Link></li>
        <li className="p__opensans"><a href="#wellness">Wellness</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>
    
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu className='hambuger' fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <ImCross fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#Destination" onClick={() => setToggleMenu(false)}>Destination</a></li>
              <li><Link to="about" onClick={() => setToggleMenu(false)}>About</Link></li>
              <li><Link to="stay" onClick={() => setToggleMenu(false)}>Stay</Link></li>
              <li><a href="#wellness" onClick={() => setToggleMenu(false)}>Wellness</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;