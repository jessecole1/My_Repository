import React, {useState} from 'react';
import Form from '../components/Form';
import TodoList from '../components/TodoList';

const Main = (props) => {

    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);

    return (
        <div>
            <Form todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList}/>
            <TodoList todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList} />
        </div>
    );
};

export default Main;