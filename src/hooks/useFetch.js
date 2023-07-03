import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setBlogs] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        setIsPending(true);
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
          setIsPending(false);
        }
      };

      fetchData();
    }, 1000);
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
