import React, {useState} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Form from './Form';
import Weather from './Weather';

const Main = (props) => {

    // const {searchCity, setSearchCity} = props;

    const [searchCity, setSearchCity] = useState("");
    const [theCity, setTheCity] = useState([]);
    // console.log("XX:" + theCity);

    return (
        <div>
            <Form theCity={theCity} setTheCity={setTheCity} searchCity={searchCity} setSearchCity={setSearchCity} />
            <Weather theCity={theCity} searchCity={searchCity} setSearchCity={setSearchCity} />
            {/* <BrowserRouter>
                <Routes> */}
                    {/* <Route element={<Form searchCity={searchCity} setSearchCity={setSearchCity} />} path="/"/> */}
                    {/* <Route path="/:theCity" element={<Weather/>} />
                </Routes>
            </BrowserRouter> */}
        </div>
    );
};

export default Main;
