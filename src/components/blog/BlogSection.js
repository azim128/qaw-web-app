import React from 'react'
import './blog.css'
import imge1 from '../assets/skills.png'
import blogList from './AllBlog'
import { Link } from 'react-router-dom'
import SectionHead from '../sectionheader/SectionHead'
const BlogSection = () => {
  return (
    <section id="recent-posts" className="recent-posts sections-bg">
      <div className="container" data-aos="fade-up">

      <SectionHead title="Recent Blog Post" subtitle="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit."/>

        <div className="row gy-4">
            {blogList.map((blog)=>(
                <div className="col-xl-4 col-md-6" key={blog.id}>
                <article>
    
                  <div className="post-img">
                    <img src={imge1} alt="" className="img-fluid"/>
                  </div>
    
                  <p className="post-category">{blog.category}</p>
    
                  <h2 className="title">
                    <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                  </h2>
    
                  <div className="d-flex align-items-center">
                    <img src="assets/img/blog/blog-author.jpg" alt="" className="img-fluid post-author-img flex-shrink-0"/>
                    <div className="post-meta">
                      <p className="post-author">{blog.author}</p>
                      <p className="post-date">
                        <time dateTime="2022-01-01">{blog.date}</time>
                      </p>
                    </div>
                  </div>
    
                </article>
              </div>
            ))}
          


        </div>

      </div>
    </section>
  )
}

export default BlogSection