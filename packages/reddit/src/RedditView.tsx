import React from 'react';
import { DateTime } from 'luxon';

export interface RedditData {
  id: string;
  title: string;
  url: string;
  created: number;
  subscribers: number;
}

interface RedditViewProps {
  subReddits?: Array<RedditData>;
}

export default function RedditView({ subReddits }: RedditViewProps) {
  return <div className="table w-full">
    <div className="table-header-group">
      <div className="table-cell p-0.5">Created</div>
      <div className="table-cell w-full p-0.5">Name</div>
      <div className="table-cell text-right p-0.5">Subscribers</div>
    </div>
    <div className="table-row-group">
      {subReddits?.map(({ id, title, url, created, subscribers }) =>
        <a key={id}
          className="table-row hover:bg-gray-100 hover:shadow"
          href={`https://reddit.com${url}`}
        >
          <div className="table-cell p-0.5">{DateTime.fromMillis(created * 1000).toRelativeCalendar()}</div>
          <div className="table-cell w-full p-0.5">{title}</div>
          <div className="table-cell text-right p-0.5">{subscribers}</div>
        </a>
      )}
    </div>
  </div>;
}
