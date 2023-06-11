import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {

  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <Form todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList}/>
      <TodoList todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
