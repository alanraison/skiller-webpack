import React from 'react';
import ReactDOM from 'react-dom';
import HackerNewsCard from './HackerNewsCard';
import 'tailwindcss/tailwind.css';

ReactDOM.render(
  <HackerNewsCard items={[
    { objectID: "1", createdAt: new Date().toISOString(), points: 5, title: 'Webpack Module Federation', url: 'https://webpack.js.org' },
    { objectID: "2", createdAt: new Date().toISOString(), points: 10, title: 'ReactJS', url: 'https://reactjs.org' }
  ]}></HackerNewsCard>,
  document.getElementById('app'),
);
