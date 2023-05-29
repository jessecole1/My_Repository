import React from 'react';

const Header = (props) => {

    const {padding, paddingFunction} = props;


    
    return (
        <div style={{
            display: "inline-block",
            width: "90%",
            margin: "0 auto",
            flexDirection: "row",
            height: paddingFunction(padding),
            backgroundColor: "red",
            padding: paddingFunction(padding),
            margin: paddingFunction(padding)
        }}>

        </div>
    )
}

export default Header;