import React from 'react';

import TodoItem from './TodoItem';
import Todo from '../models/todo';


// Giving Todos component a React.FC type
// React.FC makes it clear that {Todos} is a functional component

const Todos: React.FC<{ items: Todo[] }> = (props) => {

    return (
    <ul>
        {props.items.map(item => (
            <TodoItem key={item.id} text={item.text}/>
        ))}
    </ul>
    )
}

export default Todos;