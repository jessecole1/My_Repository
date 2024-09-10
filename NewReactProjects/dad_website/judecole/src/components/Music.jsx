import React from 'react';
import { useState } from 'react';
import {songList} from '../songs';
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Music = () => {

    const songs = songList

    const navigate = useNavigate();

    return (
        <div>
            <Navbar />
            <div class="flex flex-row flex-wrap justify-evenly m-8">
            {
                songs.toReversed().map((i, key) => (
                    <div  class="flex flex-col justify-center mb-24">
                        <h4 onClick={() => navigate(`/music/${i.id}`, {state: {songTitle: i.title, url: i.scUrl, imgName: i.imgName, lyrics: i.lyrics, credits: i.credits}})} class="font-bold text-2xl mb-4 cursor-pointer">
                            {i.title}
                        </h4>
                        <img onClick={() => navigate(`/music/${i.id}`, {state: {songTitle: i.title, url: i.scUrl, imgName: i.imgName, lyrics: i.lyrics, credits: i.credits}})} class="w-1/2 m-auto cursor-pointer" src={require('../songImg/' + `${i.imgName}`)}></img>
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default Music;
