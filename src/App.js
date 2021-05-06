import React from 'react';
import './App.css';
import ContainerList from './components/ContainerList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="main bg-light pb-5">
      <SearchBar />

      <ContainerList />
    </div>
  );
}

export default App;
