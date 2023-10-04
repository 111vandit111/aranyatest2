import {React,useEffect,useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { ImCross } from 'react-icons/im';
import './Navbar.css';

const NavbarPages = () => {
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
        <Link to={"../aranyatest2/#Destination"}><img src={"imgs/logo.png"} alt="app__logo" /></Link>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><Link to="../aranyatest2/#Destination">Destination</Link></li>
        <li className="p__opensans"><Link to={"../aranyatest2/about"}>About</Link></li>
        <li className="p__opensans"><Link to="../aranyatest2/stay">Stay</Link></li>
        <li className="p__opensans"><Link to="../aranyatest2/#wellness">Wellness</Link></li>
        <li className="p__opensans"><Link to="../aranyatest2/#contact">Contact</Link></li>
      </ul>
    
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu className='hambuger' fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <ImCross fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><Link to="../aranyatest2/#Destination" onClick={() => setToggleMenu(false)}>Home</Link></li>
              <li><Link to="../aranyatest2/about" onClick={() => setToggleMenu(false)}>About</Link></li>
              <li><Link to="../aranyatest2/stay" onClick={() => setToggleMenu(false)}>Stay</Link></li>
              <li><Link to="../aranyatest2/#wellness" onClick={() => setToggleMenu(false)}>Wellness</Link></li>
              <li><Link to="../aranyatest2/#contact" onClick={() => setToggleMenu(false)}>Contact</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarPages;