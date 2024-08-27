import React from 'react'
import { robots } from './robots';
import CardList from './assets/components/CardList';
import SearchBox from './assets/components/SearchBox';

function App() {

  return (
    <>
      <div className='text-center'>   
        <h1>RoboFriends</h1>
        <SearchBox />
        <CardList robots={robots} 
        />
      </div>
    </>
  )
}

export default App
