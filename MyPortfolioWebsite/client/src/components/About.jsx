import React from 'react';
import image from '../img/tech02.jpg';
import {git} from '../data';
import { linkedIn } from '../data';
import {twitt} from '../data';


const About = () => {

    // var sectionStyle = {
    //     width: "100%",
    //     height: "400px",
    //     backgroundImage: "url(" + { Background } + ")"
    //   };

    return (
        <div className="h-80">
            <section id="about" className="h-full">
            {/* container mx-auto flex py-20 md:flex-row flex-col justify-evenly */}
                <div className="bg-indigo-950 pl-24 h-full mx-auto flex  md:flex-row flex-col justify-evenly">
                    <div style={{flex:1}} className="flex-col h-full flex justify-evenly items-center">
                        <div className="w-200 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 text-center justify-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                            Hey I'm Jesse
                        </h1>
                        <div className="flex h-18">
                            <a
                            href="#contact"
                            className="h-4/6 shadow md:shadow-xlg text-black bg-white border-0 focus:outline-none font-bold inline-flex hover:bg-gray-700 hover:text-white rounded pb-8 pt-2 pl-5 pr-5">
                            Work With Me
                            </a>
                            <a
                            href="#projects"
                            className="h-4/6 shadow md:shadow-xlg ml-4 inline-flex text-black bg-white border-0 focus:outline-none hover:bg-gray-700 hover:text-white rounded font-bold pb-8 pt-2 pl-5 pr-5">
                            See My Past Work
                            </a>
                        </div>
                        </div>
                        <div className="pb-4 flex-row justify-start flex w-3/6">
                            <div className="flex w-10 h-10 mr-5">
                                <a href="https://github.com/jessecole1">
                                    <img src={git} />
                                </a>
                            </div>
                            <div className="flex w-10 h-10 mr-5">
                                <a href="https://www.linkedin.com/in/jessejcole/">
                                    <img src={linkedIn} />
                                </a>
                            </div>
                            <div className="flex w-10 h-10 mr-5">
                                <a href="https://twitter.com/jessecole_">
                                    <img src={twitt} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage:`url(${image})`, backgroundRepeat:"no-repeat", backgroundSize: "cover"}} className="bg-black h-full flex items-center justify-center lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img style={{position: 'relative', right: 255}}
                            className="object-cover object-center rounded"
                            alt="react"
                            src="./logo192.png"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-end text-xs">
                    <p>
                    <a href="http://www.freepik.com">Designed by Freepik</a>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;
