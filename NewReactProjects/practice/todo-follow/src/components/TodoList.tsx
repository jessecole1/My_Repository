import React from 'react';
import Todo from './Todo';

const TodoList: React.FC<{ items: string[] }> = (props) => {
    return (
        <>
        <ul>
            {
                props.items.map((t) => (
                    <div>
                        <Todo text={t}/>
                    </div>
                ))
            }
        </ul>
        </>
    );
};

export default TodoList;
