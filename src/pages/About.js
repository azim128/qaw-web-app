import React from 'react'
import About2 from '../components/about/About'
import Banner from '../components/banner/Banner'
import BlogSection from '../components/blog/BlogSection'
import ServiceModule from '../components/services/ServiceModule'
import {Servicecard} from '../components/services/Services';
const About = () => {
  return (
    <>
    <Banner title='We Are QAW' subtitle='Our team is dedicated to simplifying your business operations and providing top-notch solutions in the areas of website design and development, app development, IoT, and AI/ML.'/>
    <About2/>
    <ServiceModule Service= {Servicecard} />
    <BlogSection/>
    </>
  )
}

export default About