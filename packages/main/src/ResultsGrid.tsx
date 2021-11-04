import React from 'react';

const Reddit = React.lazy(() => import('@skiller-webpack/reddit'));
const HackerNews = React.lazy(() => import('@skiller-webpack/hackernews'));

interface ResultsGridProps {
  search: string;
}

export default function ResultsGrid({ search }: ResultsGridProps) {
  return <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-screen-md mx-auto w-full gap-4 m-2">
    <React.Suspense fallback={<div className="bg-white">Loading Reddit</div>}>
      <Reddit search={search} />
    </React.Suspense>
    <React.Suspense fallback={<div className="bg-white">Loading HackerNews</div>}>
      <HackerNews search={search} />
    </React.Suspense>
  </div>
}
