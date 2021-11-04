import React from 'react';
import HackerNewsCard from './HackerNewsCard';
import { HNData } from './HackerNewsView';

const JsonFetcher = React.lazy(() => import('@skiller-webpack/main/JsonFetcher'))

interface HackerNewsProps {
  search: string;
}

export default function HackerNews({ search }: HackerNewsProps) {
  if (!search) {
    return <HackerNewsCard items={[]} />
  }
  return <React.Suspense fallback={<div>Loading...</div>}>
    <JsonFetcher url={`http://hn.algolia.com/api/v1/search?hitsPerPage=10&query=${encodeURIComponent(search)}`}>
      {({ loading, data }) => {
        if (loading) {
          return <div className="bg-white">Loading...</div>;
        }
        return <HackerNewsCard items={data?.hits as Array<HNData>} />
      }}
    </JsonFetcher>
  </React.Suspense>
}
