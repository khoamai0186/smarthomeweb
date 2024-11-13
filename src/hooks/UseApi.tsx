import axios from "axios";
import { useState, useEffect } from "react";

export function useApi<T>(initialUrl: string) {
  const [data, setData] = useState<T>({} as T);
  const url = initialUrl;
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(url);
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [data]);

  return [{ data, isLoading, isError }];
}
