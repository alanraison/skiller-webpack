import React, { useEffect, useState } from 'react';

interface JsonFetcherProps<T> {
  url: string;
  children: ({ loading, error, data }: { loading: boolean, error?: Error, data?: T }) => React.ComponentType;
}

function JsonFetcher<T>({ url, children }: JsonFetcherProps<T>) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [data, setData] = useState<T | undefined>(undefined);

  useEffect(() => {
    setError(undefined);
    setLoading(true);

    fetch(url).then(res => {
      if (!res.ok) {
        console.error(res.statusText);
        throw new Error(res.statusText);
      }
      return res;
    })
      .then(res => res.json())
      .then(json => setData(json as T))
      .catch(e => { setError(e); console.error(e) })
      .finally(() => setLoading(false));
  }, [url]);
  return children({ loading, error, data });
}

export default JsonFetcher;
