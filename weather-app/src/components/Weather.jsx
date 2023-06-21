import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';
import Form from './Form';
// import { BrowserRouter, Routes, Route} from 'react-router-dom';



const Weather = (props) => {

    // console.log("useParams:" + theCity);

    const {theCity} = props;
    const {searchCity} = props;
    const {setSearchCity} = props;

    console.log("search city from Weather comp: " + searchCity);
    console.log("theCity: " + theCity);



    const [measure, setMeasure] = useState("fahrenheit");
    const [speedMeasure, setSpeedMeasure] = useState("mph");

    const [localTime, setLocalTime] = useState();
    const [city, setCity] = useState();

    const [tempF, setTempF] = useState();
    const [feelsLikeF, setFeelsLikeF] = useState();
    const [tempC, setTempC] = useState();
    const [feelsLikeC, setFeelsLikeC] = useState();

    const [gustM, setGustM] = useState();
    const [gustK, setGustK] = useState();
    const [windM, setWindM] = useState();
    const [windK, setWindK] = useState();

    
    useEffect(() => {
        // if (theCity) {
            axios.get(`http://api.weatherapi.com/v1/current.json?key=772fe409b0a648b694d213844232006&q=${theCity}`)
                .then((response) => {
                    setTempF(response.data.current.temp_f);
                    setFeelsLikeF(response.data.current.feelslike_f);
                    setTempC(response.data.current.temp_c);
                    setFeelsLikeC(response.data.current.feelslike_c);
                    setLocalTime(response.data.location.localtime);
                    setCity(response.data.location.name);
                    setGustM(response.data.current.gust_mph);
                    setGustK(response.data.current.gust_kph);
                    setWindM(response.data.current.wind_mph);
                    setWindK(response.data.current.wind_kph);
                    console.log(response.data)
                })
                .catch((err) => {
                    console.log(err);
                });
        // }
    
    }, [theCity]);



    return (
        <div>
            <h2>Hello there</h2>
            <p>Check out the weather for: {city}</p>
            <form>
                <select onChange={(e) => { setMeasure(e.target.value)}}>
                    <option value="fahrenheit">Fahrenheit</option>
                    <option value="celcius">Celcius</option>
                </select>
            </form>
            <br></br>
            <div>
                <p>LocalTime: {localTime}</p>
                {
                    measure === "fahrenheit"? (
                        <div>
                            <p>Temperature: {tempF}°</p>
                            <p>Feels Like: {feelsLikeF}°</p>
                        </div>
                    ) : (
                        <div>
                            <p>Temperature: {tempC}°</p>
                            <p>Feels Like: {feelsLikeC}°</p>
                        </div>
                )}
                <div>
                    <form>
                        <select onChange={(e) => {setSpeedMeasure(e.target.value)}}>
                            <option value="mph">MPH</option>
                            <option value="kph">KPH</option>
                        </select>
                    </form>
                    <div>
                        {
                            speedMeasure === "mph" ? (
                                <div>
                                    <p>Wind: {windM}-mph | Gust: {gustM}-mph</p>
                                </div>
                            ) : (
                                <div>
                                    <p>Wind: {windK}-kph | Gust: {gustK}-kph</p>
                                </div>
                        )}
                    </div>
                    
                </div>

            </div>
        </div>
    );
};

export default Weather;
