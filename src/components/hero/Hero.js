import React from 'react'
import HeroImg from "../assets/hero-img.png"
import { AiOutlinePlayCircle } from 'react-icons/ai'
import './hero.css'
export const Hero = () => {
  return (
    // <!-- ======= Hero Section ======= -->
  <section id="hero" className="d-flex align-items-center">

    <div className="container">
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
          <h1>Better Solutions For Your Business</h1>
          <h2>We are team who making your business easier and giving best solution in field of Website, App design & development, Iot and field of Ai & Ml</h2>
          <div className="d-flex justify-content-center justify-content-lg-start">
            <a href="#about" className="btn-get-started scrollto text-decoration-none">Get Started</a>
            <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox btn-watch-video text-decoration-none "><i ><AiOutlinePlayCircle/></i><span>Watch Video</span></a>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
          <img src={HeroImg} className="img-fluid animated" alt=""/>
        </div>
      </div>
    </div>

  </section>

  )
}
