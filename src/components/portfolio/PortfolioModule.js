import { FaExternalLinkAlt } from "react-icons/fa";
import "./portfolio.css";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getPortfolio } from "../../api/Api";
const PortfolioModule = () => {
  const {
    isLoading,
    isError,
    error,
    data: blogs,
  } = useQuery("blog", getPortfolio, {
    select: (data) => {
      if (Array.isArray(data)) {
        return data.sort((a, b) => b.id - a.id);
      } else {
        return data;
      }
    },
  });
  console.log(blogs);
  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <p>{error.message}</p>;
  } else if (Array.isArray(blogs)) { // added Array.isArray check
    content = blogs.map((item) => (
      <div
        className={`col-lg-4 col-md-6 portfolio-item filter-${item.catagory.name}`}
        key={item.id}
      >
        <div className="portfolio-img">
          <img src={`${process.env.REACT_APP_APIURL}${item.image}`} className="img-fluid" alt={item.catagory.name} />
        </div>
        <div className="portfolio-info">
          <h4>{item.catagory.name}</h4>
          <p className="w-75">{item.title}</p>
          <div className="details-link" title="More Details">
            <i className="bx bx-link">
              {" "}
              <Link to={`/portfolio/${item.id}`}>
                <FaExternalLinkAlt />
              </Link>{" "}
            </i>
          </div>
        </div>
      </div>
    ));
  }
  return (
    <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Examples of Our Cutting-Edge Work</p>
        </div>

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {content}
        </div>
      </div>
    </section>
  );
};

export default PortfolioModule;

// import React, { useState } from "react";
// import portfolioData from "./portfolio";
// import { FaExternalLinkAlt } from "react-icons/fa";
// import "./portfolio.css";
// import { Link } from "react-router-dom";
// const PortfolioModule = () => {
//   const [items, setitems] = useState(portfolioData);

//   const filterItem = (categoryItem) => {
//     const updatevalue = portfolioData.filter((currentelement) => {
//       return currentelement.catagory === categoryItem;
//     });
//     setitems(updatevalue);
//   };

//   const showAll = () => {
//     setitems(portfolioData);
//   };

//   return (
//     <section id="portfolio" className="portfolio">
//       <div className="container" data-aos="fade-up">
//         <div className="section-title">
//           <h2>Portfolio</h2>
//           <p>Examples of Our Cutting-Edge Work</p>
//         </div>

//         <ul
//           id="portfolio-flters"
//           className="d-flex justify-content-center"
//           data-aos="fade-up"
//           data-aos-delay="100"
//         >
//           <button data-filter="*" className="filter-active" onClick={showAll}>
//             All
//           </button>
//           <button data-filter=".filter-app" onClick={() => filterItem("app")}>
//             App
//           </button>
//           <button data-filter=".filter-card" onClick={() => filterItem("card")}>
//             Card
//           </button>
//           <button data-filter=".filter-web" onClick={() => filterItem("web")}>
//             Web
//           </button>
//         </ul>

//         <div
//           className="row portfolio-container"
//           data-aos="fade-up"
//           data-aos-delay="200"
//         >
//           {items.map((item) => (
//             <div
//               className={`col-lg-4 col-md-6 portfolio-item filter-${item.catagory}`}
//               key={item.id}
//             >
//               <div className="portfolio-img">
//                 <img src={item.url} className="img-fluid" alt="" />
//               </div>
//               <div className="portfolio-info">
//                 <h4>{item.catagory}</h4>
//                 <p className="w-75">{item.title}</p>
//                 <div className="details-link" title="More Details">
//                   <i className="bx bx-link">
//                     {" "}
//                     <Link to={`/portfolio/${item.id}`}>
//                       <FaExternalLinkAlt />
//                     </Link>{" "}
//                   </i>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PortfolioModule;
