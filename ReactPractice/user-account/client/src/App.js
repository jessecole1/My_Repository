import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import React, { useState } from 'react';

function App() {

  const [mainMessage, setMainMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="App">
      <Main mainMessage={mainMessage} setMainMessage={setMainMessage} email={email} setEmail={setEmail} password={password} setPassword={setPassword} confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword}/>
    </div>
  );
}

export default App;
