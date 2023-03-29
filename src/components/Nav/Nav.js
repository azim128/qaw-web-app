import React, { useEffect, useState } from 'react'
import {BiMenuAltLeft, BiX} from 'react-icons/bi'
import { Link } from 'react-router-dom';

import './nav.css'
const Nav = () => {
  const [className, setClassName] = useState('fixed-top');
  const [isActive, setIsActive] = useState(false);
  const toggleMobileNav = () => {
    setIsActive(!isActive);
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setClassName('fixed-top header-scrolled');
      } else {
        setClassName('fixed-top');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header id="header" className={className}>
    <div className="container d-flex align-items-center">

      <h1 className="logo me-auto"><Link to='/' className='text-decoration-none'>QAW IT</Link></h1>
      {/* <!-- Uncomment below if you prefer to use an image logo --> */}
      {/* <!-- <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

      <nav id="navbar"  className={`navbar ${isActive ? 'navbar-mobile' : ''}`} >
        <ul>
          <li><Link className="nav-link scrollto active" to='/'>Home</Link></li>
          <li><Link className="nav-link scrollto" to="about">About</Link></li>
          
          <li><Link className="nav-link   scrollto" to='/portfolio'>Portfolio</Link></li>
          <li><Link className="nav-link scrollto" to='/blog'>Blog</Link></li>

          <li className="dropdown"><Link to="services" className='text-decoration-none'><span>Services</span> <i className="bi bi-chevron-down"></i></Link>
            <ul>
              <li><Link to="/web">Web Devolopment</Link></li>
              {/* <li className="dropdown"><Link to="/aa"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></Link>
                <ul>
                  <li><Link to="/aa">Deep Drop Down 1</Link></li>
                  <li><Link to="/aa">Deep Drop Down 2</Link></li>
                  <li><Link to="/aa">Deep Drop Down 3</Link></li>
                  <li><Link to="/aa">Deep Drop Down 4</Link></li>
                  <li><Link to="/aa">Deep Drop Down 5</Link></li>
                </ul>
              </li> */}
              <li><Link to="/app">App Development</Link></li>
              <li><Link to="/ai">Ai Solution</Link></li>
              <li><Link to="/iot">Iot Solution</Link></li>
            </ul>
          </li>


          <li><Link className="getstarted scrollto text-center text-decoration-none" to='/contact'>Contact</Link></li>
          
        </ul>
        <i className="bi bi-list mobile-nav-toggle" onClick={toggleMobileNav}>{isActive ? (<BiX/>):(<BiMenuAltLeft/>)}</i>

      </nav>

    </div>
  </header>
  )
}

export default Nav