import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useLocation, useNavigate } from 'react-router-dom';

const Song = (props) => {

    const navigate = useNavigate();

    const {state} = useLocation();
    const {songTitle, url, imgName, lyrics, credits} = state;

    const songImage = require('../songImg/' + imgName);

    const [formattedCredits, setFormattedCredits] = useState("");
    const [formattedLyrics, setFormattedLyrics] = useState("");

    useEffect(() => {
        if (credits != undefined) {
            setFormattedCredits(credits.replace(/\n/g, "<br/>"));
        }
        if (lyrics != undefined) {
            setFormattedLyrics(lyrics.replace(/\n/g, "<br/>"));
        }
    }, []);

    return (
        <div>
            <Navbar />
            <button onClick={() => navigate(-1)} class="bg-black text-white p-4 flex ml-64 mb-8">Back</button>
            <div class="flex flex-row justify-evenly w-3/4 m-auto">
                <img class="w-1/3" src={songImage}></img>
                <div class="flex flex-col justify-evenly">
                    <h2 class="text-7xl ">{songTitle}</h2>
                    <h3>CREDITS</h3>
                    <p dangerouslySetInnerHTML={{ __html: formattedCredits }}>

                    </p>
                </div>
            </div>
            <div class="mt-8">
                <iframe class="m-auto" width="25%" height="100" scrolling="no" frameborder="no" allow="autoplay" src={url}></iframe><a href="https://soundcloud.com/jude-cole-music" title="Jude Cole" target="_blank" ></a>
            </div>
            <div class="mt-8 text-left ml-32">
                <h3 class="text-4xl font-bold">LYRICS</h3>
                <p class="mt-8 w-1/2 mb-8" dangerouslySetInnerHTML={{ __html: formattedLyrics }}>
                    
                </p>
            </div>
        </div>
    );
};

export default Song;
