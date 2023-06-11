import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Main from './components/Main'


function App() {

  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
