import React from 'react';
import ReactDOM from 'react-dom';
import HackerNewsCard from './HackerNewsCard';
import 'tailwindcss/tailwind.css';
import { DateTime } from 'luxon';

ReactDOM.render(
  <HackerNewsCard items={[
    { objectID: "1", createdAt: DateTime.now(), points: 5, title: 'Webpack Module Federation', url: 'https://webpack.js.org' },
    { objectID: "2", createdAt: DateTime.now(), points: 10, title: 'ReactJS', url: 'https://reactjs.org' }
  ]}></HackerNewsCard>,
  document.getElementById('app'),
);
