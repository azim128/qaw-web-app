import React from 'react'
// import { AiOutlineGlobal, AiTwotoneBug, AiTwotoneThunderbolt } from 'react-icons/ai'
// import { AiOutlineGlobal } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import SectionHead from '../sectionheader/SectionHead'
import './service.css'
const ServiceModule = (props) => {
  
  return (
    <section id="services" className="services sections-bg">
      <div className="container" data-aos="fade-up">
        <SectionHead title='Our Services' subtitle='Our team will work with you to understand your business requirements and tailor solutions that meet your unique needs and goals, ensuring the best results for your business.'/>


        <div className="row gy-4" data-aos="fade-up" data-aos-delay="100">

        {props.Service.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.id}>
              <div className="service-item  position-relative">
                <div className="icon">
                  <i className="bi bi-activity"><img src={item.imgName} className='img-fluid' alt={item.id}/></i>
                </div>
                <h3>{item.title}</h3>
                <p>{item.decs}</p>
                {item.link?<Link to={item.link} className="readmore stretched-link">
                  Read more </Link>:<></>}
                
            
              </div>
            </div>
          ))}
          
          {/* <div className="col-lg-4 col-md-6">
            <div className="service-item  position-relative">
              <div className="icon">
                <i className="bi bi-activity"><AiOutlineGlobal/></i>
              </div>
              <h3>Website Design</h3>
              <p> Our expert designers can help create a stunning website that not only looks great but also performs optimally, providing your visitors with an engaging and user-friendly experience.</p>
              <a href="#a" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
            </div>
          </div> */}
        </div>

      </div>
    </section>
  )
}

export default ServiceModule