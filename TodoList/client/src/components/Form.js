import React, {useState} from 'react';

const Form = (props) => {

    // const {todo, setTodo} = props;
    // const {todoList, setTodoList} = props;

    const submitHandler = (e) => {
        e.preventDefault();
        if (todo.length === 0) {return};
        const todoVals = {
            text: todo,
            complete: false
        }
        setTodoList([...todoList, todoVals]);
        setTodo("");
    }

    return (
        <div>
            <form onSubmit={(e) => {submitHandler(e)}}>
                <input value={todo} type="text" onChange={(e) => setTodo(e.target.value)}/>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default Form;
