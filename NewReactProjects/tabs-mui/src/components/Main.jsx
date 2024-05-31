import React from 'react';
import {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Main = () => {

    const tabsArray = [
        {title: "Projects"},
        {title: "Skills"},
        {title: "Testimonials"}
    ]

    const [value, setValue] = useState(1);



    return (
        <>
            <p>hey</p>
            <Paper square>
                
                {tabsArray.map((obj, key) => (
                    <Tab label={obj.title} 
                    onChange={(event, newValue) => {
                        setValue(key + 1);
                    }}
                    />
                ))}
            </Paper>
            <p>The tab {value} was clicked!</p>
        </>
    );
};

export default Main;
