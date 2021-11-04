import React from 'react';
import { DateTime } from 'luxon';

export interface HNData {
  objectID: string;
  createdAt: string;
  points: number;
  url: string;
  title: string;
}

interface HNViewProps {
  items: Array<HNData>;
}

export default function HackerNewsView({ items }: HNViewProps) {
  return <div className="table w-full">
    <div className="table-header-group">
      <div className="table-cell p-0.5">Created</div>
      <div className="table-cell w-full p-0.5">Title</div>
      <div className="table-cell text-right p-0.5">Points</div>
    </div>
    <div className="table-row-group">
      {items?.map(({ objectID, createdAt, points, url, title }) => (
        <a key={objectID} className="table-row hover:bg-gray-100 hover:shadow" href={url}>
          <div className="table-cell p-0.5">{DateTime.fromISO(createdAt).toRelativeCalendar()}</div>
          <div className="table-cell p-0.5 w-full">{title}</div>
          <div className="table-cell p-0.5 text-right">{points}</div>
        </a>
      ))}
    </div>
  </div>;
}
