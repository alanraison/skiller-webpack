import React from 'react';
import HackerNewsView, { HNData } from './HackerNewsView';

const Card = React.lazy(() => import('@skiller-webpack/main/Card'));

interface HackerNewsCardProps {
  items: Array<HNData>;
}

export default function HackerNewsCard({ items }: HackerNewsCardProps) {
  return <React.Suspense fallback={<div>Loading...</div>}>
    <Card
      icon="https://www.ycombinator.com/assets/ycdc/ycombinator-logo-37cf030fbc255fc71d19aa21bd5b32076aa206e8fbd0121c9247db2adcbd7851.png"
      colour="#ff6600"
      title="Hacker News"
    >
      <HackerNewsView items={items} />
    </Card>
  </React.Suspense>
}
