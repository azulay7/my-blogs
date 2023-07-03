import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const resp = await fetch(url);
          if (!resp.ok) {
            throw Error("could not fetch data from that resource");
          }
          const blogs = await resp.json();
          setBlogs(blogs);
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    }, 1000);

    return () => console.log("clean up");
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
