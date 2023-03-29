import React from 'react'
import { AiFillFacebook, AiFillGooglePlusSquare, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import './footer.css'

const Footer = () => {
  return (
    <div>
        <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6 footer-contact">
            <h3>Need Name</h3>
            <p>
              A108 Adam Street <br/>
              New York, NY 535022<br/>
              United States <br/>
              <strong>Phone:</strong> +1 5589 55488 55<br/>
              <strong>Email:</strong> info@example.com<br/>
            </p>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <Link to="/">Home</Link></li>
              <li><i className="bx bx-chevron-right"></i> <Link to="/about">About us</Link></li>
              <li><i className="bx bx-chevron-right"></i> <Link to="/services">Services</Link></li>
              <li><i className="bx bx-chevron-right"></i> <Link to="/">Terms of service</Link></li>
              <li><i className="bx bx-chevron-right"></i> <Link to="/">Privacy policy</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <Link to="/">Web Design</Link></li>
              <li><i className="bx bx-chevron-right"></i> <Link to="/">Web Development</Link></li>
              <li><i className="bx bx-chevron-right"></i> <Link to="/">Product Management</Link></li>
              <li><i className="bx bx-chevron-right"></i> <Link to="/">Marketing</Link></li>
              <li><i className="bx bx-chevron-right"></i> <Link to="/">Graphic Design</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Social Networks</h4>
            <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
            <div className="social-links mt-3">
              <Link to="/" className="twitter"><i className="bx bxl-twitter"> <AiFillTwitterCircle/> </i></Link>
              <Link to="/" className="facebook"> <AiFillFacebook/> <i className="bx bxl-facebook"></i></Link>
              <Link to="/" className="instagram"> <AiFillInstagram/> <i className="bx bxl-instagram"></i></Link>
              <Link to="/" className="google-plus"><i className="bx"> <AiFillGooglePlusSquare/> </i></Link>
              <Link to="/" className="linkedin"><i className="bx bxl-linkedin"><AiFillLinkedin/></i></Link>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div className="container footer-bottom clearfix">
      <div className="copyright">
        &copy; Copyright <strong><span>QAW</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        Designed by <Link to="/about">QAW IT</Link>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer