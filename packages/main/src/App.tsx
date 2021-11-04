import React, { useState, createContext } from 'react';
import Search from './Search';
import ResultsGrid from './ResultsGrid';

const searchContext = createContext('');

export default function App() {
  const [search, setSearch] = useState('');
  return <div>
    <Search value={search} onChange={setSearch} />
    <ResultsGrid search={search} />
  </div>
}
