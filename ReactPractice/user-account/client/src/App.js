import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import React, { useState } from 'react';

function App() {

  const [mainMessage, setMainMessage] = useState('');

  return (
    <div className="App">
      <Main mainMessage={mainMessage} setMainMessage={setMainMessage}/>
    </div>
  );
}

export default App;
