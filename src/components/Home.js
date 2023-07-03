import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "../hooks/useFetch";
const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const [data, isLoading, error] = useFetch("http://localhost:8000/data");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id != id);
    setBlogs(newBlogs);
  };
  return (
    <div className="home">
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <BlogList blogs={data} handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
