import React, { useState } from 'react'
import SearchBox from './Components/SearchBox'
import ResultsPage from './Components/ResultsPage'
import './App.css';

function App() {

  const [isRequested, setIsRequested] = useState(false)
  const [name1, setname1] = useState("")
  const [searchResults, setSearchResults] = useState(null)
    
  function handleChange(event) {
    setname1(event.target.value)
  }

  function handleSubmit() {
    async function fetchData() {
      const url = `https://api.github.com/users/${name1}`;
      const response = await fetch(url);
      const data = await response.json();
      //const results = data.results[0]
      setSearchResults(data)
      setIsRequested(true)
    }
    fetchData();
  }

  return (
    <div className="App">
      {isRequested ? 
        <ResultsPage 
          searchResults={searchResults}
        /> : 
        <SearchBox 
          isRequested={isRequested} 
          handleChange={handleChange} 
          handleSubmit={handleSubmit} 
          name={name1}
        />
      }
    </div>
  );
}

export default App;

// searchResults={searchResults}
// setSearchResults={setSearchResults}
