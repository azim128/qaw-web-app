import React from 'react'
import { RiCheckDoubleFill } from 'react-icons/ri'
import Why from '../assets/why-us.png'
import SectionHead from '../sectionheader/SectionHead'
import './about.css'
const About = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

      <SectionHead title="About Us" subtitle="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit."/>

        <div className="row content">
          <div className="col-lg-6 my-auto">
            <h1 className='mb-4'>
              Lorem ipsum dolor sit amet.
            </h1>
            <ul className='list-unstyled'>
              <li><i> <RiCheckDoubleFill/> </i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
              <li><i> <RiCheckDoubleFill/> </i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
              <li><i><RiCheckDoubleFill/></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <img src={Why} className='fluid' alt='why-us' />
          </div>
        </div>

      </div>
    </section>
  )
}

export default About