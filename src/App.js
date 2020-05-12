import React from 'react';
import logo from './logo.svg';
import Hello from './components/hello';
import CallerList from './components/callerlist';
import Map from './components/Map';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello />

       
      

       
      </header>
  
      <div>
     
      <Map />
      <CallerList />
     
      </div>
    </div>
  );
}

export default App;
