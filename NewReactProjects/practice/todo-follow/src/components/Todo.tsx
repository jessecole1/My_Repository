import React from 'react';

const Todo: React.FC<{ text: string }> = (props) => {
    return (
        <>
            {props.text}
        </>
    );
};

export default Todo;
