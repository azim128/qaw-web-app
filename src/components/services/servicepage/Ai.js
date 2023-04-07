import React from 'react'
import Banner from '../../banner/Banner'
import ServiceModule from '../ServiceModule'
import {AiSolution} from '../Services';
const Ai = () => {
  return (
    <>
    <Banner title='Machine Learning (ML) & Artificial Intelligence (AI)' subtitle='Get a top-notch Machine Learning and Artificial Intelligence solution for your organization from our team of skilled professionals.'/>
    <ServiceModule Service={AiSolution}/>
    </>
  )
}

export default Ai