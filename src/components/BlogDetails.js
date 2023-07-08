import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BlogDetails = ({ blog, deleteBlog }) => {
  // const { id } = useParams();
  // const navigate = useNavigate();
  const id = blog.id;
  // const {
  //   data: blog,
  //   isPending,
  //   error,
  // } = useFetch(`http://localhost:8000/blogs/${id}`);

  // const handleDelete = () => {
  //   axios.delete(`http://localhost:8000/blogs/${id}`).then((_) => {
  //     // navigate("/");
  //   });
  // };

  return (
    <div className="blog-details">
      {/* <h2>Blog Details {id}</h2> */}
      {/* {isPending && <p>Loading...</p>} */}
      {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
      {blog && (
        <div className="content">
          {/* <h2>{blog.title}</h2> */}
          <p>{blog.body}</p>
          <button onClick={() => deleteBlog(blog)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
