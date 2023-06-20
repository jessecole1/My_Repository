import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Weather = () => {

    const [measure, setMeasure] = useState("fahrenheit");
    const [localTime, setLocalTime] = useState();
    const [city, setCity] = useState();

    const [tempF, setTempF] = useState();
    const [feelsLikeF, setFeelsLikeF] = useState();
    const [tempC, setTempC] = useState();
    const [feelsLikeC, setFeelsLikeC] = useState();

    const [temp, setTemp] = useState();
    const [feelsLike, setFeelsLike] = useState();
    console.log(measure);

    useEffect(() => {
        axios.get("http://api.weatherapi.com/v1/current.json?key=772fe409b0a648b694d213844232006&q=London")
            .then((response) => {
                setTempF(response.data.current.temp_f);
                setFeelsLikeF(response.data.current.feelslike_f);
                setTempC(response.data.current.temp_c);
                setFeelsLikeC(response.data.current.feelslike_c);
                setLocalTime(response.data.location.localtime);
                setCity(response.data.location.name);
                console.log(response.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);


    const measureHandler = (e) => {
        e.preventDefault();
        if (measure === "fahrenheit") {
            setTemp(tempF);
            setFeelsLike(feelsLikeF);
        } else if (measure === "celcius") {
            setTemp(tempC);
            setFeelsLike(feelsLikeC);
        }
    }

    return (
        <div>
            <h2>Hello there</h2>
            <p>Check out the weather for: {city}</p>
            <form>
                <select onChange={(e) => {measureHandler(e); setMeasure(e.target.value)}}>
                    <option value="fahrenheit">Fahrenheit</option>
                    <option value="celcius">Celcius</option>
                </select>
                <button>Submit</button>
            </form>
            <br></br>
            {
                measure === "fahrenheit"? (
                    <div>
                        <p>LocalTime: {localTime}</p>
                        <p>Temperature: {tempF}</p>
                        <p>Feels Like: {feelsLikeF}</p>
                    </div>
                ) : (
                    <div>
                        <p>LocalTime: {localTime}</p>
                        <p>Temperature: {tempC}</p>
                        <p>Feels Like: {feelsLikeC}</p>
                    </div>
            )}
        </div>
    );
};

export default Weather;
