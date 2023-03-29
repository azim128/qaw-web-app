import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Banner from '../banner/Banner';
import portfolioData from '../portfolio/portfolio';
import './portfolio.css'
const SinglePortfolio = () => {
    const { id } = useParams();
  const [protfolio, setprotfolio] = useState(null);
  useEffect(() => {
    let protfolio = portfolioData.find((protfolio) => protfolio.id === parseInt(id));
    if (protfolio) {
      setprotfolio(protfolio);
    }
    // eslint-disable-next-line
  }, []);
  return (
    <><Banner title={protfolio?.catagory}/>
    <div className='go-back py-3 text-center'>
    <Link className='blog-goBack' to='/'>
    <span> &#8592;</span> <span>Go Back</span>
  </Link>
    </div>
    
  {protfolio?(<div className='container d-flex flex-column align-items-center '>

  <img src={protfolio.turl} alt={protfolio.catagory} className='fluid'/>
  <div className='text-center'>
  <h1>{protfolio.id}</h1>
  <h1>{protfolio.catagory}</h1>
  <h4>{protfolio.title}</h4>
  </div>
    
  </div>):(<div></div>)}
  </>
  )
}

export default SinglePortfolio