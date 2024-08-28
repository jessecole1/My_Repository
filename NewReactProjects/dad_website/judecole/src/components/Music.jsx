import React from 'react';
import { useState } from 'react';
import {songList} from '../songs';
import Navbar from './Navbar'

const Music = () => {

    const songs = songList

    return (
        <div>
            <Navbar />
            {
                songs.toReversed().map((i, key) => (
                    <div>
                        {i.title}<iframe width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay" src={i.scUrl}></iframe><div><a href="https://soundcloud.com/jude-cole-music" title="Jude Cole" target="_blank" >Jude Cole</a> · <a href="https://soundcloud.com/jude-cole-music/pretty-thief-42f" title="Pretty Thief (feat. Jordan Whitlock) (2023)" target="_blank">Pretty Thief (feat. Jordan Whitlock) (2023)</a></div>
                    </div>
                ))
            }
        </div>
    );
};

export default Music;
