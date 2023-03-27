import React from 'react'
import Banner from '../../banner/Banner'
import ServiceModule from '../ServiceModule'
import {IotSolution} from '../Services';

const Iot = () => {
  return (
    <>
    <Banner title='IoT and Robotics Solutions' subtitle='Unlock the full potential of IoT and robotics technology with our innovative solutions.'/>
    <ServiceModule Service={IotSolution}/>
    </>
  )
}

export default Iot