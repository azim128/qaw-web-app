import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Banner from '../banner/Banner';
import './portfolio.css'
import { useQuery } from 'react-query';
import { getSinglePortfolio } from '../../api/Api';
const SinglePortfolio = () => {
    const { id } = useParams();
  
    const { isLoading, isError, error, data: blog } = useQuery(
      "blog",
      () => getSinglePortfolio(id)
    );
    console.log(blog);
    let content;
    if (isLoading) {
      content = <p>Loading...</p>;
    } else if (isError) {
      content = <p>{error.message}</p>;
    } else {
      content =blog?(<div className='container d-flex flex-column align-items-center '>

      <img src={`${process.env.REACT_APP_APIURL}${blog.image}`} alt={blog.title} className='img-fluid'/>
      <div className='text-center my-5'>
      <h1>{blog.id}</h1>
      <h1>{blog.details}</h1>
      <h4>{blog.title}</h4>
      </div>
        
      </div>):(<div></div>)
    }
 
  


  return (
    <><Banner title={blog?.title} subtitle={blog?.title}/>
    <div className='go-back py-3 text-center'>
    <Link className='blog-goBack' to='/'>
    <span> &#8592;</span> <span>Go Back</span>
  </Link>
    </div>
    
  {content}
  </>
  )
}

export default SinglePortfolio









// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
// import { Link } from 'react-router-dom';
// import Banner from '../banner/Banner';
// import portfolioData from '../portfolio/portfolio';
// import './portfolio.css'
// const SinglePortfolio = () => {
//     const { id } = useParams();
//   const [protfolio, setprotfolio] = useState(null);
//   useEffect(() => {
//     let protfolio = portfolioData.find((protfolio) => protfolio.id === parseInt(id));
//     if (protfolio) {
//       setprotfolio(protfolio);
//     }
//     // eslint-disable-next-line
//   }, []);
//   return (
//     <><Banner title={protfolio?.catagory}/>
//     <div className='go-back py-3 text-center'>
//     <Link className='blog-goBack' to='/'>
//     <span> &#8592;</span> <span>Go Back</span>
//   </Link>
//     </div>
    
//   {protfolio?(<div className='container d-flex flex-column align-items-center '>

//   <img src={protfolio.turl} alt={protfolio.catagory} className='fluid'/>
//   <div className='text-center'>
//   <h1>{protfolio.id}</h1>
//   <h1>{protfolio.catagory}</h1>
//   <h4>{protfolio.title}</h4>
//   </div>
    
//   </div>):(<div></div>)}
//   </>
//   )
// }

// export default SinglePortfolio;

