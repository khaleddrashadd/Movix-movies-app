import { useEffect, useState } from 'react';
import { fetchData } from '../utils/api';

const useFetch = url => {
  const [data, setData] = useState(null);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    fetchData(url)
      .then(res => {
        setIsLoading(false);
        setData(res);
      })
      .catch(err => {
        setIsLoading(false);
        setError('Something went wrong!');
      });
  }, [url]);

  return { data, isloading, error };
};

export default useFetch;
