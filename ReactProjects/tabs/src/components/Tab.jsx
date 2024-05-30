import React from 'react';
import {useState} from 'react';

const Tab = ({label, onClick, isActive}) => {


    return (
        <div 
        className={`tab ${isActive ? "active" : ""}`}
        onClick = {onClick}
        >
            {label}
        </div>
    );
};

export default Tab;
