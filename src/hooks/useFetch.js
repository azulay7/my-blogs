import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
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
          setData(blogs);
        } catch (error) {
          setError(error.message);
        } finally {
          setIsPending(false);
        }
      };

      fetchData();
    }, 500);
  }, [url]);

  return { data, isPending, error, setData };
};

export default useFetch;
