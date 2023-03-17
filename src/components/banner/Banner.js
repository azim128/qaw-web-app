import React from 'react'
// import bannerImg from "../assets/hero-img.png"
import './banner.css'
import { Link } from 'react-router-dom'
export const Banner = () => {
  return (
    // <!-- ======= banner Section ======= -->
  <section id="banner" className="d-flex align-items-center">

    <div className="container">
      <div className="row">
        <div className="col-12 d-flex flex-column align-items-center justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
          <h1>Better Solutions For Your Business</h1>
          <h2 className='text-center'>We are team who making your business easier and giving best solution in field of Website, App design & development, Iot and field of Ai & Ml</h2>
          <div className="d-flex justify-content-center justify-content-lg-start">
            <Link to='/contact' className="btn-get-started scrollto text-decoration-none">Get Started</Link>
            
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