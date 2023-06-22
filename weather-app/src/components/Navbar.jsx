import React from 'react';
import Form from './Form';

const Navbar = (props) => {

    const {searchCity, setSearchCity} = props;
    const {theCity, setTheCity} = props;
    console.log("Navbar: " + searchCity);

    return (
        <div className="bg-indigo-500 h-20 w-full">
            <Form theCity={theCity} setTheCity={setTheCity} searchCity={searchCity} setSearchCity={setSearchCity} />
            {/* <Form props={props} /> */}
        </div>
    );
};

export default Navbar;
