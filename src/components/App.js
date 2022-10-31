import React, { useState } from 'react'
import '../styles/App.css';
import { Wrapper } from '../context/userContext';
import { Settings } from './Settings';
import { Home } from './Home';
const App = () => {
  const [greeting, SetGreeting] = useState('aksh')
  return (
    <div id="main">
      <Wrapper.Provider value = {{greetting : greeting}}>
        <Settings />
        <Home />
      </Wrapper.Provider>
    </div>
  )
}


export default App;
