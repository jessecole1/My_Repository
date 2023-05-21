import React from 'react';

const Display = (props) => {

    const {boxList} = props;

    return (
        <div>
            {
                boxList.map((box, index) => (
                    <div key={index} style={{
                        display: "inline-block",
                        margin: "10px",
                        height: box.size,
                        width: box.size,
                        backgroundColor: box.color
                    }}>
                    </div>
                ))
            }
        </div>
    )
}

export default Display;