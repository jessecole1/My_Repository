import React from 'react';
import logo from '../img/logo.png'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const tabsArray = [
        {title: "Home"},
        {title: "About"},
        {title: "Blog"}, 
        {title: "Music"}
    ]

    return (
        <div class="flex flex-row justify-between h-24 ml-24">
            <div>
                <img src={logo} class=" h-full"/>
            </div>
            <div class="flex flex-row justify-between items-center w-96 mr-24">
            {
                tabsArray.map((i, key) => (
                    <div>
                        <Link to={`/about`}>{i.title}</Link>
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default Navbar;
