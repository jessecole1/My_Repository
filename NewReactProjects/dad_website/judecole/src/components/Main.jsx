import React from 'react';
import Front from './Front'
import Navbar from './Navbar';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Main = () => {

    const [message, setMessage] = useState("Loading...");

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
            <div>
                {message}
            </div>
            <Front />
        </div>
    );
};

export default Main;
