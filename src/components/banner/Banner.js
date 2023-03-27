import React from 'react'
// import bannerImg from "../assets/hero-img.png"
import './banner.css'
import { Link } from 'react-router-dom'
export const Banner = (props) => {
  return (
    // <!-- ======= banner Section ======= -->
  <section id="banner" className="d-flex align-items-center">

    <div className="container">
      <div className="row">
        <div className="col-12 d-flex flex-column align-items-center justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
          {/* <h1>Better Solutions For Your Business</h1> */}
          <h1 className='text-center mx-auto w-75 pb-4'>{props.title}</h1>
          <h2 className='text-center mx-auto w-75 pb-4'>{props.subtitle}</h2>
          <div className="d-flex justify-content-center justify-content-lg-start">
            {props.btntext?<Link to='/contact' className="btn-get-started scrollto text-decoration-none">{props.btntext}</Link>:<></>}
            
            
          </div>
        </div>
        {/* <div className="col-lg-6 order-1 order-lg-2 banner-img" data-aos="zoom-in" data-aos-delay="200">
          <img src={bannerImg} className="img-fluid animated" alt=""/>
        </div> */}
      </div>
    </div>

  </section>

  )
}
export default Banner;