import React from 'react';
import {useState} from 'react';
import {projectData} from '../project-data';

const projData = projectData;


const Projects = () => {

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleHover = (index) => {
        setHoveredIndex(index);
        console.log(index);
    }

    return (
        <div>
            {
                projData.map((obj, key) => (
                    <div key={key} 
                    id="contentCardId" 
                    class="border-2 w-96 p-4" 
                    onMouseEnter={() => handleHover(key)}
                    onMouseLeave={() => handleHover(null)}
                    >
                        <p class="font-black text-2xl p-2 mb-2">{obj.title}</p>
                        <p><img src={obj.image} class="w-full h-72"/></p>
                        <p class="text-left indent-7 p-2">{obj.description}</p>
                        <p class="h-56 overflow-y-auto">
                            {
                                obj.tech.map((i) => (
                                    <div class="border-slate-400 rounded bg-slate-400 m-2 flex flex-row justify-start center items-center p-1">
                                        <img src="./checkmark.png" class="w-8 h-8"/>
                                        <span class="ml-2">{i}</span>
                                    </div>
                                ))
                            }
                        </p>
                    </div>
                ))
            }
        </div>
    );
};

export default Projects;
