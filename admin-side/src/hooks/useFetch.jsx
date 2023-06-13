import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const fixedUrl = "http://localhost:3000/" + url;
      const response = await fetch(fixedUrl);
      let result = await response.json();
      setData(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, fetchData };
}
