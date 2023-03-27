import React from 'react'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
// import FaqModule from '../components/faq/FaqModule'
import { Hero } from '../components/hero/Hero'
import Newsletter from '../components/newsletter/Newsletter'
import PortfolioModule from '../components/portfolio/PortfolioModule'
import ServiceModule from '../components/services/ServiceModule'
import WhyUs from '../components/whyus/WhyUs'
import {Servicecard} from '../components/services/Services';
const Home = () => {
  return (
    <><Hero/> 
    <About/>
    <WhyUs/>
    <ServiceModule Service= {Servicecard}/>
    {/* <FaqModule/> */}
    <PortfolioModule/>
    <Contact/>
    <Newsletter/>
    </>
  )
}

export default Home