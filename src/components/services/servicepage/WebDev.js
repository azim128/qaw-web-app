import React from 'react'
import Banner from '../../banner/Banner'
import ServiceModule from '../ServiceModule'
import {WebDevelopment} from '../Services';
const WebDev = () => {
  return (
    <>
    <Banner title='Web Development Solution' subtitle='Our team of web development experts can help you achieve your business goals with innovative solutions.'/>
    <ServiceModule Service={WebDevelopment}/>
    </>
  )
}

export default WebDev