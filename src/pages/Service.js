import React from 'react'
import Banner from '../components/banner/Banner'
import ServiceModule from '../components/services/ServiceModule'
import {Servicecard} from '../components/services/Services';
const Service = () => {
  return (
    <>
    <Banner title='SERVICES' subtitle='Creative and Technology Skills to Solve Your Complex Business Needs'/>
    <ServiceModule Service= {Servicecard}/>
    </>
  )
}

export default Service