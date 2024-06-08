import React from 'react';
import {languages, frameworksLibraries, databases, otherTech} from '../project-data';

const Skills = (props) => {

    const {skillRef} = props;

    return (
        <div ref={skillRef} id="skills" class="scroll-smooth pb-24">
            <h2 class="font-black text-left text-4xl w-full ml-16 mb-8 pt-32">Skills</h2>
            <div class="flex flex-row flex-wrap justify-evenly w-full">
                <div class="border-2 border-slate-700 w-64 rounded-2xl bg-gray-800 p-4">
                    <h3 class="text-3xl text-left p-2">Languages</h3>
                    {
                        languages.map((language, key) => (
                            <div class="shadow shadow-[1px_1px_20px_rgb(16,25,44)] rounded text-m flex flex-row border-slate-950 border w-3/4 m-4 bg-slate-900 cursor-default ml-auto mr-auto pt-2 pb-2 pl-2 pr-2">
                                <img class="w-4 mt-auto mb-auto" src="./checkmark.png"/>
                                <span class="ml-2">{language}</span>
                            </div>
                        ))
                    }
                </div>
                <div class="border-2 border-slate-700 w-80 rounded-2xl bg-gray-800 p-4">
                    <h3 class="text-3xl text-left p-2">Framworks and Libraries </h3>
                    {
                        frameworksLibraries.map((i, key) => (
                            <div class="shadow shadow-[1px_1px_20px_rgb(16,25,44)] rounded text-m flex flex-row border-slate-950 border w-3/4 m-4 bg-slate-900 cursor-default ml-auto mr-auto pt-2 pb-2 pl-2 pr-2">
                                <img class="w-4 mt-auto mb-auto" src="./checkmark.png"/>
                                <span class="ml-2">{i}</span>
                            </div>
                        ))
                    }
                </div>
                <div class="border-2 border-slate-700 w-64 rounded-2xl bg-gray-800 p-4">
                    <h3 class="text-3xl text-left p-2">Databases</h3>
                    {
                        databases.map((data, key) => (
                            <div class="shadow shadow-[1px_1px_20px_rgb(16,25,44)] rounded text-m flex flex-row border-slate-950 border w-3/4 m-4 bg-slate-900 cursor-default ml-auto mr-auto pt-2 pb-2 pl-2 pr-2">
                                <img class="w-4 mt-auto mb-auto" src="./checkmark.png"/>
                                <span class="ml-2">{data}</span>
                            </div>
                        ))
                    }
                </div>
                <div class="border-2 border-slate-700 w-80 rounded-2xl bg-gray-800 p-4">
                    <h3 class="text-3xl text-left p-2">Other Technology</h3>
                    {
                        otherTech.map((tech, key) => (
                            <div class="shadow shadow-[1px_1px_20px_rgb(16,25,44)] rounded text-m flex flex-row border-slate-950 border w-3/4 m-4 bg-slate-900 cursor-default ml-auto mr-auto pt-2 pb-2 pl-2 pr-2">
                                <img class="w-4 mt-auto mb-auto" src="./checkmark.png"/>
                                <span class="ml-2">{tech}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Skills;
