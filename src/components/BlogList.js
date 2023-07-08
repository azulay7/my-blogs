import { Link } from "react-router-dom";
import BlogDetails from "./BlogDetails";
const BlogList = ({ blogs, deleteBlog }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          {/* <Child callback={hi}></Child> */}
          {/* <Link to={`/blogs/${blog.id}`}> */}
          <article>
            <h2>{blog.title}</h2>
            <p>Writtten by {blog.author}</p>
          </article>
          <BlogDetails blog={blog} deleteBlog={deleteBlog}></BlogDetails>
          {/* </Link> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
