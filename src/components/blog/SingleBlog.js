import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import Banner from "../banner/Banner";
import { useQuery } from 'react-query';
import { getSingleBlog } from '../../api/Api';
import './blog.css'

const SingleBlog = () => {
  const { id } = useParams();
  
    const { isLoading, isError, error, data: blog } = useQuery(
      "blog",
      () => getSingleBlog(id)
    );
    console.log(blog);
    let content;
    if (isLoading) {
      content = <p>Loading...</p>;
    } else if (isError) {
      content = <p>{error.message}</p>;
    } else {
      content =blog?(<section id="blog" className="blog">
      <div className="container" data-aos="fade-up">

        <div className="row g-5">

          <div className="col-lg-12">

            <article className="blog-details">

              <div className="single-post-img d-flex justify-content-center">
                <img src={`${process.env.REACT_APP_APIURL}${blog.image}`} alt="" className="img-fluid mx-auto"/>
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
                  {blog.sub_title}
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
    </section>):(<div></div>)
    }
  return (
    <>
      <Banner title={blog?.catagory?.name}/>
      <div className="go-back py-3 text-center">
        <Link className="blog-goBack" to="/blog">
          <span> &#8592;</span> <span>Go Back</span>
        </Link>
        <p className='text-white'>{blog?.catagory?.name}</p>
      </div>
      {content}
    </>
  );
};

export default SingleBlog;
