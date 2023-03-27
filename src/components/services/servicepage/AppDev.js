import React from 'react'
import Banner from '../../banner/Banner'
import ServiceModule from '../ServiceModule'
import {AppDevelopment} from '../Services';
const AppDev = () => {
  return (
    <>
    <Banner title='App Development Solution' subtitle='Elevate your business with our expert app development solutions.'/>
    <ServiceModule Service={AppDevelopment}/>
    </>
  )
}

export default AppDev