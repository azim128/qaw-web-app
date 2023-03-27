import React from 'react'
import {FaCogs, FaMicrochip, FaReact, FaSnowflake} from 'react-icons/fa'
import SectionHead from '../sectionheader/SectionHead'

import './whyus.css'
const WhyUs = () => {
  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <SectionHead title=" Why Us" subtitle ='We believe in fostering long-term partnerships with our clients, built on a foundation of trust and transparency.'/>
        

        <div className="row">
          <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon"><i> <FaCogs/> </i></div>
              <h5>Experienced Team</h5>
              <p>Our experienced team has a proven track record of delivering high-quality projects that are tailored to our clients' specific needs and grounded in our extensive knowledge of various industries.</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><i > <FaReact/> </i></div>
              <h5>Customer Satisfaction</h5>
              <p>Our company prioritizes customer satisfaction and values clear communication and partnership with our clients to deliver solutions that exceed their expectations and build long-term relationships based on trust and mutual benefit.</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon"><i ><FaMicrochip/></i></div>
              <h5>Cutting Edge Solution</h5>
              <p>We deliver cutting-edge solutions through our commitment to innovation, technology expertise, and exploring new technologies and techniques.</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
            <div className="icon-box">
              <div className="icon"><i><FaSnowflake/></i></div>
              <h5>Flexibility and Agility</h5>
              <p>Our company is flexible, agile, and scalable, adapting to each project's unique needs and delivering high-quality results quickly and efficiently.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default WhyUs;