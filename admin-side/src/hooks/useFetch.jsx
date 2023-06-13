import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios({
        url: "http://localhost:3000/" + url,
      });
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
}
