import React from 'react';
import Front from './Front'
import Navbar from './Navbar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMyContext } from './MyProvider';
import Cookies from 'js-cookie';

const Main = (props) => {

    const [loggedIn, setLoggedIn] = useState();

    const navigate = useNavigate();

    const [message, setMessage] = useState("Loading...");
    const [cookie, setCookie] = useState();

    const [admin, setAdmin] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/", {withCredentials: true})
        .then((res) => {
            setMessage(res.data.message)
            setLoggedIn(res.data.loggedInStatus);
        })
        .catch((err) => console.log(err))
    }, []);

    return (
        <div>
            {
                loggedIn? (
                    <h3>Yes</h3>
                ) : (
                    <h3>No</h3>
                )
            }
            <div class="">
                <Navbar/>
            </div>
            <Front />
        </div>
    );
};

export default Main;
