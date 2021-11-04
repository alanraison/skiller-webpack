import React from 'react';
import RedditCard from './RedditCard';
import { RedditData } from './RedditView';
const JsonFetcher = React.lazy(() => import('@skiller-webpack/main/JsonFetcher'));

export interface RedditProps {
  search?: string;
}

export default function Reddit({ search }: RedditProps) {
  if (search) {
    return <React.Suspense fallback={<div>Spinner...</div>}>
      <JsonFetcher url={`https://api.reddit.com/api/subreddit_autocomplete_v2.json?limit=10&include_over_18=false&query=${encodeURIComponent(search)}`}>
        {({ loading, data }) => {
          if (loading) {
            return <div className="bg-white">Loading...</div>;
          }
          return <RedditCard subReddits={data?.data?.children?.map((c: { data: RedditData }) => c.data)} />
        }}
      </JsonFetcher>
    </React.Suspense>;
  } else {
    return <RedditCard subReddits={[]} />;
  }

}
