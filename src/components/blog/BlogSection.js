import "./blog.css";
import { Link } from "react-router-dom";
import SectionHead from "../sectionheader/SectionHead";
import { useQuery } from "react-query";
import { getblog } from "../../api/Api";
import { BsPersonCircle } from "react-icons/bs";
const BlogSection = () => {
  const {
    isLoading,
    isError,
    error,
    data: blogs,
  } = useQuery("blog", getblog, {
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
  } else if (Array.isArray(blogs)) {
    // added Array.isArray check
    content = blogs.map((blog) => (
      <div className="col-xl-4 col-md-6" key={blog.id}>
        <article>
          <div className="post-img">
            <img
              src={`${process.env.REACT_APP_APIURL}${blog.image}`}
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="post-body">
            <p className="post-category">{blog?.category?.name}</p>
            <h2 className="title">
              <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
            </h2>
          </div>

          <div className="d-flex align-items-center justify-content-between post-author-sec">
            <h1 className="post-author-img">
              <BsPersonCircle />
            </h1>
            <div className="post-meta">
              <p className="post-author">{blog?.author?.name}</p>
              <p className="post-date">
                {blog.time.split('T')[0]}
              </p>
            </div>
          </div>
        </article>
      </div>
    ));
  }
  return (
    <section id="recent-posts" className="recent-posts sections-bg">
      <div className="container" data-aos="fade-up">
        <SectionHead
          title="Recent Blog Post"
          subtitle="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit."
        />

        <div className="row gy-4">{content}</div>
      </div>
    </section>
  );
};

export default BlogSection;
