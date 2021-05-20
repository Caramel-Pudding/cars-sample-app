import { useState, useEffect } from "react";

export interface UseFetchReturn<Response> {
  response: Response | null;
  error: null;
  isLoading: boolean;
}

export function useFetch<Response>(url: string): UseFetchReturn<Response> {
  const [response, setResponse] = useState<Response | null>(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url);
        const json = (await res.json()) as Response;
        setResponse(json);
        setIsLoading(false);
      } catch (reqError) {
        setError(reqError);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { response, error, isLoading };
}
