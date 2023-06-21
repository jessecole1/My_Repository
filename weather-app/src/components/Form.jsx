import React, {useState, useEffect} from 'react';
import {navigate} from 'react-router-dom';
// import {navigate} from '@gatsbyjs/reach-router';
import Weather from './Weather';
import axios from 'axios';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';


const Form = (props) => {

    const {searchCity, setSearchCity} = props;
    const {theCity, setTheCity} = props;
    

    const submitHandler = (e) => {
        e.preventDefault();
        // setTheCity("");
        setTheCity([searchCity]);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" onChange={(e) => setSearchCity(e.target.value)}/>
                <button>Search</button>
            </form>
        </div>
    );
};

export default Form;
