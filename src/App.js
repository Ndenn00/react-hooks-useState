import React from 'react';
import './App.css';
import StateCounter from './components/StateCounter';
import StateCounterMulti from './components/StateCounterMulti';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StateCounter/>
        <br/>
        <StateCounterMulti/>
        <br/>
        <Form/>
      </header>
    </div>
  );
}

export default App;
