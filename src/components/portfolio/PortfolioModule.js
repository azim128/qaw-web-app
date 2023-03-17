import React, { useState } from "react";
import portfolioData from './portfolio';
import {FaExternalLinkAlt} from 'react-icons/fa'
import './portfolio.css';
import { Link } from "react-router-dom";
const PortfolioModule = () => {
    const [items, setitems] = useState(portfolioData);
  
    const filterItem = (categoryItem) => {
      const updatevalue = portfolioData.filter((currentelement) => {
        return currentelement.catagory === categoryItem;
      })
      setitems(updatevalue)
    }
  
    const showAll = () => {
      setitems(portfolioData)
    }
  
    return (
      <section id="portfolio" className="portfolio">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
              aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
              quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
              fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
  
          <ul
            id="portfolio-flters"
            className="d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <button data-filter="*" className="filter-active" onClick={showAll}>
              All
            </button>
            <button data-filter=".filter-app" onClick={() => filterItem("app")}>App</button>
            <button data-filter=".filter-card" onClick={() => filterItem("card")}>Card</button>
            <button data-filter=".filter-web" onClick={() => filterItem("web")}>Web</button>
          </ul>
  
          <div
            className="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {items.map((item) => (
              <div className={`col-lg-4 col-md-6 portfolio-item filter-${item.catagory}`} key={item.id}>
                <div className="portfolio-img">
                  <img src={item.url} className="img-fluid" alt="" />
                </div>
                <div className="portfolio-info">
                  <h4>{item.catagory}</h4>
                  <p className="w-75">{item.title}</p>
                  <div className="details-link" title="More Details">
                    <i className="bx bx-link"> <Link to={`/portfolio/${item.id}`}><FaExternalLinkAlt/></Link> </i>
      </div>
    </div>
  </div>
))}

            
            
          
          
        </div>
      </div>
    </section>
  );
};

export default PortfolioModule;
