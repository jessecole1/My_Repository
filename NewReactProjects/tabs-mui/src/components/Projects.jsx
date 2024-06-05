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
            <h2 class="font-black text-left text-4xl w-full ml-32 mb-8">Some of my work</h2>
            {
                projData.map((obj, key) => (
                    <div key={key} 
                    id="contentCardId" 
                    class="w-5/8 h-full flex flex-row border-none rounded-lg p-4 hover:bg-[#0a0e1f] mb-4 hover:shadow hover:shadow-gray-500" 
                    onMouseEnter={() => handleHover(key)}
                    onMouseLeave={() => handleHover(null)}
                    >
                        <div class=" flex flex-row">
                            <div class="w-4/5 h-4/5 flex-1">
                                <p><img src={obj.image} class="w-56 h-40 rounded"/></p>
                            </div>
                            <div class="ml-4 flex-4 w-96">
                                <p class="font-black text-left">{obj.title}</p>
                                <p class="text-left indent-7 text-[#8999BB]">{obj.description}</p>
                            </div>
                        </div>
                        
                    </div>
                ))
            }
        </div>
    );
};

export default Projects;
