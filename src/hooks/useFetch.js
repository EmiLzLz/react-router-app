import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (url) => {
      try {
        let res = await fetch(url);

        if (!res.ok) {
          throw {
            err: true,
            status: res.status,
            statusText: !res.statusText
              ? "Something went wrong"
              : res.statusText,
          };
        }

        let data = await res.json();

        setData(data);
        setError({ err: false });
      } 
      catch (error) {
        setError()
      }
    };

    getData(url);
  }, []);

  return { data };
};
