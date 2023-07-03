import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "../hooks/useFetch";
import URI from "../const/uri";
const Home = () => {
  //   const [blogs, setBlogs] = useState([]);

  const { data: blogs, isPending, error } = useFetch(URI);

  return (
    <div className="home">
      {isPending && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
