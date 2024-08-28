import React from 'react';
import logo from '../img/logo.png'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

const Navbar = () => {


    return (
        <div class="flex flex-row justify-between h-24 ml-24">
            <div>
                <Link to={`/`}><img src={logo} class=" h-full"/></Link>
            </div>
            <div class="flex flex-row justify-between items-center w-96 mr-24">
                    <div>
                        <Link to={`/`}>Home</Link>
                    </div>
                    <div>
                        <Link to={`/about`}>About</Link>
                    </div>
                    <div>
                        <Link to={`/music`}>Music</Link>
                    </div>
            </div>
        </div>
    );
};

export default Navbar;
