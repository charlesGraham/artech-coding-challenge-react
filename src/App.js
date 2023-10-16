
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="results" element={<SearchResults />} />
      </Routes>
    </div>
  );
}

export default App;
