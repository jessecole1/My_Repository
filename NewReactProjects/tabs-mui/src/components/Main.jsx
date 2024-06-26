import React from 'react';
import {useState, useRef, useEffect} from 'react';
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
        {title: "Skills"}
    ]

    const [value, setValue] = useState(1);
    const [tabTitle, setTabTitle] = useState(tabsArray[0].title);

    var homeRef = useRef();
    var projRef = useRef();
    var skillRef = useRef();
    
    const handleClick = (key) => {
        // ref = key;
        console.log(key);
    }

    const handleContactClick = () => {
        setClicked(!clicked);
        let homeEle = document.getElementById("homeId");

    }

    const [clicked, setClicked] = useState(false);

    return (
        <div class="flex flex-row">
            <Paper square class="bg-slate-950 text-white text-xl fixed border-r-2 border-slate-500 flex flex-col h-screen w-56">
                <div className={`${clicked? "opacity-30" : "opacity-100"}`}>
                    <img class="cursor-pointer rounded-full w-40 h-40 ml-auto mr-auto mt-10 mb-10" src={image} 
                    onClick={() => {
                        homeRef.current?.scrollIntoView({
                            behavior: "smooth"
                        })
                    }}></img>
                        {/* {tabsArray.map((obj, key) => (
                            // <Tab label={obj.title} 
                            // // onClick={handleClick(key)}
                            // // onChange={() => {
                            // //     setValue(key + 1);
                            // //     setTabTitle(obj.title);
                            // // }}
                            // />

                        ))} */}
                        <Tab label="Home" onClick={() => {
                            homeRef.current?.scrollIntoView({
                                behavior: 'smooth'
                            })
                        }}/>
                        <Tab label="Projects" onClick={() => {
                            projRef.current?.scrollIntoView({
                                behavior: 'smooth'
                            })
                        }} />
                        <Tab label="Skills" onClick={() => {
                            skillRef.current?.scrollIntoView({
                                behavior: 'smooth'
                            })
                        }}/>
                    </div>
            </Paper>
            <div className={`overflow-x-hidden bg-slate-950 text-white ml-56 w-full h-screen ${clicked? "overflow-y-hidden" : ""}`}>
                <Home homeRef={homeRef} projRef={projRef} handleContactClick={handleContactClick} clicked={clicked} setClicked={setClicked}/>
                <Projects projRef={projRef}/>
                <Skills skillRef={skillRef}/>
                {/* {value === 1 && <Home />}
                {value === 2 && <Projects />}
                {value === 3 && <Skills />} */}
            </div>
        </div>
    );
};

export default Main;
