import React from 'react';
import logo from '../img/logo.png'
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import MyProvider, { useMyContext } from './MyProvider';
import axios from 'axios';

const Navbar = () => {

    const navigate = useNavigate();

    const {admin, setAdmin, adminLoggedIn, setAdminLoggedIn} = useMyContext();

    const logoutHandler = () => {
        axios.post("http://localhost:8000/admin/logout", {}, {withCredentials:true})
        .then(setAdminLoggedIn(false))
        .then(() => navigate('/'));
        console.log("exiting logoutHandler method..");
    }


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
                        <Link to={'/posts'}>Posts</Link>
                    </div>
                    <div>
                        <Link to={`/about`}>About</Link>
                    </div>
                    <div>
                        <Link to={`/music`}>Music</Link>
                    </div>
                    {
                        adminLoggedIn ? (
                            <div>
                                <button onClick={logoutHandler}>Logout</button>
                            </div>
                        ) : (
                            <div>
                                <Link to={"/login"}>Login</Link>
                            </div>
                        )
                    }
            </div>
        </div>
    );
};

export default Navbar;
