import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Weather from './components/Weather';
import Form from './components/Form';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './components/Main';



function App() {
  return (
    <div className="App">
      <Main />
      {/* <Form searchCity={searchCity} setSearchCity={setSearchCity}/> */}
      {/* <Form /> */}
      {/* <BrowserRouter>
        <Routes>
          <Route element={<Form />} path="/"/>
          <Route element={<Weather/>} path="/:theCity" />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
