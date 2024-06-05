import React from 'react';
import {languages, frameworksLibraries, databases, otherTech} from '../project-data';

const Skills = (props) => {

    const {skillRef} = props;

    return (
        <div ref={skillRef} id="skills" class="scroll-smooth">
            <div>
                <h3>Languages:</h3>
                {
                    languages.map((language, key) => (
                        <div>
                            {language}
                        </div>
                    ))
                }
            </div>
            <div>
                <h3>Framworks and Libraries: </h3>
                {
                    frameworksLibraries.map((i, key) => (
                        <div>
                            {i}
                        </div>
                    ))
                }
            </div>
            <div>
                <h3>Databases:</h3>
                {
                    databases.map((data, key) => (
                        <div>
                            {data}
                        </div>
                    ))
                }
            </div>
            <div>
                <h3>Other Technology:</h3>
                {
                    otherTech.map((tech, key) => (
                        <div>
                            {tech}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Skills;
