import React from 'react';
import RedditView, { RedditData } from './RedditView';

const Card = React.lazy(() => import('@skiller-webpack/main/Card'));

interface RedditCardProps {
  subReddits: Array<RedditData>;
}

export default function RedditCard({ subReddits }: RedditCardProps) {
  return (
    <React.Suspense fallback={<div className="bg-white">Spinner...</div>}>
      <Card icon="https://www.redditinc.com/assets/images/site/reddit-logo.png" title="Reddit" colour="orangered">
        <RedditView subReddits={subReddits} />
      </Card>
    </React.Suspense>
  );
}
