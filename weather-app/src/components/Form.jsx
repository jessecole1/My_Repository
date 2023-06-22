import React, {useState, useEffect} from 'react';
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
        <div className="flex justify-center align-center bg-indigo-500 h-20 w-full">
            <h2 className="mr-4 self-center text-3xl font-bold">Weather</h2>
            <div className="ml-4 self-center">
                <form onSubmit={submitHandler}>
                    <input type="text" value={searchCity} onChange={(e) => setSearchCity(e.target.value)}/>
                    <button className="bg-slate-700 text-white ml-4 rounded-lg border-slate-2 p-1 pl-2 pr-2">Search</button>
                    <div>
                        {
                            data.filter(item => {
                                let searchTerm = searchCity.toLowerCase();
                                let name = item.name.toLowerCase();
                                return searchTerm && name.startsWith(searchCity);
                            }).slice(0,10)
                            .map((item) => {
                                return <div className="border-b-2 border-sky-500" onClick={() => {setSearchCity(item.name); searchHandler(item.name)}} >{item.name}</div>
                            })
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
