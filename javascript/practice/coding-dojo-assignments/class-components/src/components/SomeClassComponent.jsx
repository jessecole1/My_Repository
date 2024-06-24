import React, { Component } from 'react';

class SomeClassComponent extends React.Component {

    

    render() {

        const {item} = this.props;

        return (
            <div>
                <ul>
                    <li>{item.firstName}</li>
                    <li>{item.lastName}</li>
                    <li>{item.age}</li>
                    <li>{item.hairColor}</li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

export default SomeClassComponent;