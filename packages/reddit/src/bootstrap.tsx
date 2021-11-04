import React from 'react';
import ReactDOM from 'react-dom';
import RedditCard from './RedditCard';
import 'tailwindcss/tailwind.css';

ReactDOM.render(
  <RedditCard
    subReddits={
      [
        { id: 'reddit-1', title: 'webpack', url: '/r/webpack', created: new Date().getTime() / 1000 - 1000, subscribers: 1 },
        { id: 'reddit-2', title: 'react', url: '/r/react', created: new Date().getTime() / 1000 - 100000, subscribers: 2 },
      ]
    }
  />,
  document.getElementById('app')
);
