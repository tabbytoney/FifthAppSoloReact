import React from 'react';
import './App.css';
import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'

function App() {
  return (
    <div className="App">
      <h1>Tabby's React Sample</h1>
      <FirstComponent thePropOne="Tabby" />
      <SecondComponent thePropTwo="Scout" />
    </div>
  )
}

export default App;
