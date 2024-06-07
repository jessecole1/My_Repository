import React from 'react';
import {useState} from 'react';
import {projectData} from '../project-data';

const projData = projectData;


const Projects = (props) => {

    const {projRef} = props;

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleHover = (index) => {
        setHoveredIndex(index);
        console.log(index);
    }

    return (
        <div ref={projRef} id="projects" class="m-auto flex flex-col items-center justify-center scroll-smooth">
            <h2 class="font-black text-left text-4xl w-full ml-32 mb-8 pt-16">See some of my work</h2>
            {
                projData.map((obj, key) => (
                    <div key={key} 
                    id="contentCardId" 
                    class="mb-8 w-5/8 h-full flex flex-row border-none rounded-lg p-4 group 
                    lg:hover:!opacity-50 mb-4 
                    hover:border 
                    hover:shadow 
                    hover:shadow-gray-800 
                    shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] 
                    lg:group-hover:bg-slate-800/50" 
                    onMouseEnter={() => handleHover(key)}
                    onMouseLeave={() => handleHover(null)}
                    >
                        <div class="-inset-x-4 -inset-y-4 z-0 lg:-inset-x-6">
                        </div>
                        <div class="flex flex-row  lg:group-hover:drop-shadow-lg ">
                            <div class="w-4/5 h-4/5 flex-1">
                                <p><img src={obj.image} class="w-56 h-40 rounded"/></p>
                            </div>
                            <div class="ml-4 flex-4 w-96">
                                <p class="font-black text-left">{obj.title}</p>
                                <p class="text-left indent-7 text-[#8999BB] grou-hover:text-black">{obj.description}</p>
                            </div>
                        </div>
                        
                    </div>
                ))
            }
        </div>
    );
};

export default Projects;
