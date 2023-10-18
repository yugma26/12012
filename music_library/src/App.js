import logo from './logo.svg';
import './App.css';
import { createResource as fetchData } from './helper'
import { useEffect, useState, Suspense } from 'react'

function App() {
  
  return (
    <div className="App">
      return (
    <div className="App">
        <SearchBar handleSearch={handleSearch} />
        {message}
        <Suspense fallback={<h1>Loading...</h1>}>
            // <Gallery data={data} />
        </Suspense>
    </div>
)

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  
}

useEffect(() => {
  if (searchTerm) {
      setData(fetchData(searchTerm))
  }
}, [searchTerm])

export default App;
