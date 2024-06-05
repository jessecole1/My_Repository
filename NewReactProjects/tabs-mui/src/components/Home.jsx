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
                    <button class="bg-indigo-500 text-white border-slate-600 p-2 rounded hover:bg-indigo-400">Get In Touch</button>
                    <button class="bg-white text-black font-bold border-white p-2 rounded hover:bg-gray-300">My Projects</button>
                </div>
            </div>
            <div>
                <img src={image} class="border-4 border-indigo-500 w-72 h-72 rounded-full mt-56 mr-32"></img>
            </div>
        </div>
    );
};

export default Home;
