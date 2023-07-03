import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
  const { id } = useParams();

  const {
    data: blog,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);
  return (
    <div className="blog-details">
      <h2>Blog Details {id}</h2>
      {isPending && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {blog && (
        <div className="content">
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
