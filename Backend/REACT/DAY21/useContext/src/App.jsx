import React from 'react'
import Navbar from './components/Navbar';
import Display from './components/Display';
import Login from './components/Login';

const App = () => {

  return (
    <div>
      <Navbar/>
      <hr/>
      <Display/>
      <hr/>
      <Login/>
    </div>

  )
}

export default App
