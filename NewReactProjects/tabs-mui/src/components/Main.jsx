import React from 'react';
import {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import '../App.css';
import image from '../img/me.png';

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
        <div class="flex flex-row">
            <Paper square class="bg-[#3479BF] text-white text-xl fixed border-r-2 border-slate-500 flex flex-col h-screen w-56">
                <img class="rounded-full w-40 h-40 ml-auto mr-auto mt-10 mb-10" src={image}></img>
                    {tabsArray.map((obj, key) => (
                        <Tab label={obj.title} 
                        onChange={() => {
                            setValue(key + 1);
                            setTabTitle(obj.title);
                        }}
                        />
                    ))}
            </Paper>
            <div class="overflow-auto bg-slate-950 text-white ml-56 w-full h-screen">
                {value === 1 && <Home />}
                {value === 2 && <Projects />}
                {value === 3 && <Skills />}
            </div>
        </div>
    );
};

export default Main;
