import React from 'react';
import { useRef } from 'react';

const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {

        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value; 

        // or 
        // const enteredText = todoTextInputRef.current!.value;
        // the ! is used when we, the dev, know that the value 'enteredText' is always going to have a value

        if (enteredText.trim().length === 0) {
            // -- trim() removes whitespace from beginning and end of a string 

            // throw an error
            return;
        }

        props.onAddTodo(enteredText);

    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="text">Todo Text</label>
            <input id="text" type="text" ref={todoTextInputRef}/>
            <button>Submit</button>
        </form>
    );
};

export default NewTodo;
