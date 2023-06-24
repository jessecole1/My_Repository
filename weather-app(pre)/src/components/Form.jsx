import React, {useState, useEffect} from 'react';
import {navigate} from 'react-router-dom';
// import {navigate} from '@gatsbyjs/reach-router';
import Weather from './Weather';
import axios from 'axios';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
let data = require('../cities.json');


const Form = (props) => {

    const {searchCity, setSearchCity} = props;
    const {theCity, setTheCity} = props;
    

    const submitHandler = (e) => {
        e.preventDefault();
        setTheCity([searchCity]);
    }

    const searchHandler = (name) => {
        setTheCity([name]);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" value={searchCity} onChange={(e) => setSearchCity(e.target.value)}/>
                <button>Search</button>
                <div>
                    {
                        data.filter(item => {
                            let searchTerm = searchCity.toLowerCase();
                            let name = item.name.toLowerCase();
                            return searchTerm && name.startsWith(searchCity);
                        })
                        .map((item) => {
                            return <div onClick={() => {setSearchCity(item.name); searchHandler(item.name)}} >{item.name}</div>
                        })
                    }
                </div>
            </form>
        </div>
    );
};

export default Form;
