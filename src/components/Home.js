import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "../hooks/useFetch";
import URI from "../const/uri";
import { useCallback } from "react";

const Home = () => {
  //   const [blogs, setBlogs] = useState([]);

  const { data: blogs, isPending, error, setData } = useFetch(URI);

  const deleteBlog = useCallback((blogToDelete) => {
    const newBlogs = blogs.filter((blog) => blogToDelete.id != blog.id);
    setData(newBlogs);
  });

  return (
    <div className="home">
      {/* <div className="controller">
        <button>Save</button>
      </div> */}

      {isPending && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {blogs && (
        <BlogList class="blog-list" blogs={blogs} deleteBlog={deleteBlog} />
      )}
    </div>
  );
};

export default Home;
