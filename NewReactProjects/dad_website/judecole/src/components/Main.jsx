import React from 'react';
import Front from './Front'
import Navbar from './Navbar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMyContext } from './MyProvider';

const Main = (props) => {

    const {prop1, prop2} = useMyContext();

    const navigate = useNavigate();

    const [message, setMessage] = useState("Loading...");

    const [admin, setAdmin] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/")
        .then((res) => setMessage(res.data.message))
        .catch((err) => console.log(err))
    }, []);


    return (
        <div>
            <div class="">
                <Navbar/>
            </div>
            <Front />
        </div>
    );
};

export default Main;
