import React from 'react';

const Output = (props) => {

    const {result} = props;
    return (
        <div>
            <p>{result}</p>
        </div>
    );
};

export default Output;
