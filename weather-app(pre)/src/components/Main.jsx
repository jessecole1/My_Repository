import React, {useState} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Form from './Form';
import Weather from './Weather';

const Main = (props) => {

    const [searchCity, setSearchCity] = useState("");
    const [theCity, setTheCity] = useState([]);

    return (
        <div>
            <Form theCity={theCity} setTheCity={setTheCity} searchCity={searchCity} setSearchCity={setSearchCity} />
            <Weather theCity={theCity} searchCity={searchCity} setSearchCity={setSearchCity} />
        </div>
    );
};

export default Main;
