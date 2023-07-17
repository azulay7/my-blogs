import { Link } from "react-router-dom";
import BlogDetails from "./BlogDetails";
const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <Link to={`/blogs/${blog.id}`}>
          <div className="blog-preview" key={blog.id}>
            {/* <Child callback={hi}></Child> */}
            <article>
              <h2>{blog.title}</h2>
              <p>Writtten by {blog.author}</p>
            </article>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
