import React from 'react';
import image from '../img/tech02.jpg';

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
                <div className="bg-violet-900 pl-24 h-full mx-auto flex  md:flex-row flex-col justify-evenly">
                    <div style={{flex:1}} className="h-full flex justify-evenly items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                            Hey I'm Jesse
                        </h1>
                        <div className="flex justify-center">
                            <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Work With Me
                            </a>
                            <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Past Work
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
