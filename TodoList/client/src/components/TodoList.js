import React from 'react';

const TodoList = (props) => {

    // const {todoList, setTodoList} = props;

    return (
        <div>
            {
                todoList.map((value, index) => {
                    return (
                        <div key={index}>
                            <p>{value.text}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default TodoList;