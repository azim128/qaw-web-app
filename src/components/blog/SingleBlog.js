import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Banner from "../banner/Banner";
import blogList from "./AllBlog";
import img1 from '../assets/why-us.png'
import './blog.css'

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Banner title={blog?.category}/>
      <div className="go-back py-3 text-center">
        <Link className="blog-goBack" to="/blog">
          <span> &#8592;</span> <span>Go Back</span>
        </Link>
      </div>
      {blog?(<section id="blog" className="blog">
      <div className="container" data-aos="fade-up">

        <div className="row g-5">

          <div className="col-lg-12">

            <article className="blog-details">

              <div className="post-img">
                <img src={img1} alt="" className="img-fluid"/>
              </div>

              <h2 className="title">{blog.title}</h2>

              <div className="meta-top">
                <ul>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-person"></i> 
                    <Link to='/name'>John Doe</Link>
                    </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-clock"></i> 
                    <Link to='/name'>
                        <time dateTime="2020-01-01">Jan 1, 2022</time>
                    </Link>
                </li>
                <li className="d-flex align-items-center">
                    <i className="bi bi-chat-dots"></i> 
                    <Link to='/name'>12 Comments</Link>
                </li>
                </ul>
              </div>

              <div className="content">
                <p>
                  {blog.body}
                </p>

                <p>
                {blog.body}
                </p>

                <blockquote>
                  <p>
                  {blog.subtitle}
                  </p>
                </blockquote>

              </div>
              <div className="meta-bottom">
                <i className="bi bi-folder"></i>
                <ul className="cats">
                  <li><Link>Business</Link></li>
                </ul>

                <i className="bi bi-tags"></i>
                <ul className="tags">
                  <li><Link>Creative</Link></li>
                  <li><Link>Tips</Link></li>
                  <li><Link>Marketing</Link></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>):(<div></div>)}
    </>
  );
};

export default SingleBlog;
