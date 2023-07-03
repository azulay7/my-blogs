import { Link } from "react-router-dom";

const BlogList = ({ blogs, handleDelete }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <article>
              <h2>{blog.title}</h2>
              <p>Writtten by {blog.author}</p>
            </article>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
