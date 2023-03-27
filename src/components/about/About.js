import React from 'react'
import { RiCheckDoubleFill } from 'react-icons/ri'
import Why from '../assets/why-us.png'
import SectionHead from '../sectionheader/SectionHead'
import './about.css'
const About = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

      <SectionHead title="About Us" subtitle="With our proficiency in website design, app development, IoT, and AI/ML, we can assist you in growing your company and achieving your objectives."/>

        <div className="row content mt-4">
          <div className="col-lg-5 my-auto">
            <h1 className='mb-4'>
            Customized Solutions for Your Business
            </h1>
            <ul className='list-unstyled'>
              <li className='d-flex'><i> <RiCheckDoubleFill/> </i> <p>Comprehensive analysis of your business needs and goals</p></li>
              <li className='d-flex'><i> <RiCheckDoubleFill/> </i> <p>Custom-tailored solutions to meet your specific requirements</p></li>
              <li className='d-flex'><i><RiCheckDoubleFill/></i> <p>Scalable solutions that can grow with your business</p></li>
              <li className='d-flex'><i><RiCheckDoubleFill/></i> <p>User-centric design to ensure the best user experience</p></li>
              <li className='d-flex'><i><RiCheckDoubleFill/></i> <p>Ongoing support and maintenance to keep your solutions up-to-date</p></li>
              <li className='d-flex'><i><RiCheckDoubleFill/></i> <p>Experienced and skilled team of designers, developers, and engineers</p></li>
              {/* <li className='d-flex'><i><RiCheckDoubleFill/></i> <p>Integration of the latest technology trends and best practices into your solutions</p></li>
              <li className='d-flex'><i><RiCheckDoubleFill/></i> <p>Competitive pricing and flexible payment options to suit your budget and preferences</p></li> */}
            </ul>
          </div>
          <div className="col-lg-7 pt-4 pt-lg-0">
            <img src={Why} className='fluid' alt='why-us' />
          </div>
        </div>

      </div>
    </section>
  )
}

export default About