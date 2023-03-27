import React from 'react'
import Banner from '../components/banner/Banner'
import PortfolioModule from '../components/portfolio/PortfolioModule'

const Protfolio = () => {
  return (
    <div>
        <Banner title='Featured Work' subtitle='Our expertise in custom-based software applications and technologies has allowed us to create innovative solutions for a variety of industries, from healthcare to finance'/>
        <PortfolioModule/>
    </div>
  )
}

export default Protfolio