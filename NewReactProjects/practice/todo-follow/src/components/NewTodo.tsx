import React from 'react';
import {useRef} from 'react';

const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {

    const todoRef = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const currentText = todoRef.current!.value;

        if (currentText.trim().length === 0) {
            return;
        }

        props.onAddTodo(currentText);
    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="textId">Add Todo:</label>
            <input type="text" id="textId" ref={todoRef} />
            <button>Submit</button>
        </form>
    );
};

export default NewTodo;
