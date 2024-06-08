import React from 'react';
import image from '../img/me.png';
import {useRef} from 'react';

const Home = (props) => {

    const {homeRef} = props;

    return (
        <div ref={homeRef} class="flex flex-row justify-between content-center h-full">
            <div>
                <h2 class="font-black text-left text-2xl mt-56 -ml-84 ml-32">Hi, I'm Jesse</h2>
                <h2 class="font-black text-left text-6xl -ml-84 ml-32 mt-2">Full<span class="font-black text-amber-400">stack</span><br></br> <span class="text-amber-400">Developer</span></h2>
                <p class="text-left ml-32 mt-8">I'm a fullstack developer based in Los Angeles.<br></br> I will help you build and design a website you and<br></br> your users will love.</p>
                <div class="flex flex-row justify-between ml-32 mt-8 w-56">
                    <button class="bg-indigo-500 text-white border-slate-600 p-2 rounded active:bg-indigo-400">Get In Touch</button>
                    <button class="bg-white text-black font-bold border-white p-2 rounded active:bg-gray-300">My Projects</button>
                </div>
            </div>
            <div>
                <img src={image} class="border-4 border-indigo-500 w-72 h-72 rounded-full mt-56 mr-32"></img>
                <div class="flex flex-row justify-evenly w-72 mt-4">
                    <a href="https://x.com/jessecole_" target="_blank"><img class="w-8 opacity-50 hover:opacity-75 cursor-pointer" src="./x.png"></img></a>
                    <a href="https://www.linkedin.com/in/jessejcole/" target="_blank"><img class="w-8 opacity-50 hover:opacity-75 cursor-pointer" src="./linkedin.png"></img></a>
                    <a href="https://github.com/jessecole1" target="_blank"><img class="w-8 opacity-50 hover:opacity-75 cursor-pointer" src="./github.png"></img></a>
                    <a href="https://www.instagram.com/itsjessecole80/" target="_blank"><img class="w-8 opacity-50 hover:opacity-75 cursor-pointer" src="./ig.png"></img></a>
                </div>
            </div>
        </div>
    );
};

export default Home;
