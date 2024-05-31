import React from 'react';
import {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Project from './Project';
import Home from './Home';
import Skills from './Skills';

const Main = () => {

    const tabsArray = [
        {title: "Home"},
        {title: "Projects"},
        {title: "Skills"},
        {title: "Testimonials"}
    ]

    const [value, setValue] = useState(1);
    const [tabTitle, setTabTitle] = useState(tabsArray[0].title);


    return (
        <>
            <Paper square>
                
                {tabsArray.map((obj, key) => (
                    <Tab label={obj.title} 
                    onChange={() => {
                        setValue(key + 1);
                        setTabTitle(obj.title);
                    }}
                    />
                ))}
            </Paper>
            <div>
                {value === 1 && <Home />}
                {value === 2 && <Project />}
                {value === 3 && <Skills />}
            </div>
        </>
    );
};

export default Main;
