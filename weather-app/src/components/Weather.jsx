import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';
import Form from './Form';
import Card from './Card';


const Weather = (props) => {


    const {theCity} = props;
    const {searchCity} = props;

    const [measure, setMeasure] = useState("fahrenheit");
    const [speedMeasure, setSpeedMeasure] = useState("mph");

    const [localTime, setLocalTime] = useState();
    const [city, setCity] = useState();
    const [region, setRegion] = useState();

    const [tempF, setTempF] = useState([]);
    const [feelsLikeF, setFeelsLikeF] = useState();
    const [tempC, setTempC] = useState();
    const [feelsLikeC, setFeelsLikeC] = useState();

    const [gustM, setGustM] = useState();
    const [gustK, setGustK] = useState();
    const [windM, setWindM] = useState();
    const [windK, setWindK] = useState();

    const [date, setDate] = useState();

    const [forecastData, setForecastData] = useState({});

    const [hourArray, setHourArray] = useState([]);

 
    // console.log("dateArray: " + dateArray);

    
    useEffect(() => {
            // axios.get(`http://api.weatherapi.com/v1/current.json?key=772fe409b0a648b694d213844232006&q=${theCity}`)
            //     .then((response) => {
            //         setTempF(response.data.current.temp_f);
            //         setFeelsLikeF(response.data.current.feelslike_f);
            //         setTempC(response.data.current.temp_c);
            //         setFeelsLikeC(response.data.current.feelslike_c);
            //         setLocalTime(response.data.location.localtime);
            //         setCity(response.data.location.name + ",");
            //         setRegion(response.data.location.region);
            //         setGustM(response.data.current.gust_mph);
            //         setGustK(response.data.current.gust_kph);
            //         setWindM(response.data.current.wind_mph);
            //         setWindK(response.data.current.wind_kph);
            //         // console.log("current data: " + JSON.stringify(response.data.current.is_day))
            //     })
            //     .catch((err) => {
            //         console.log(err);
            //     });
    
    // }, [theCity]);

            axios.get(`http://api.weatherapi.com/v1/forecast.json?key=772fe409b0a648b694d213844232006&q=${theCity}`)
                .then((response) => {
                    
                })
                .catch((err) => {
                    console.log(err);
                });
            }, [theCity]);





    return (
        <div className="bg-blue-200 h-96 flex justify-center">
            <Card forecastData={forecastData} measure={measure} speedMeasure={speedMeasure} localTime={localTime} city={city} 
            region={region} tempF={tempF} feelsLikeF={feelsLikeF} tempC={tempC} feelsLikeC={feelsLikeC}
            gustM={gustM} gustK={gustK} windM={windM} windK={windK} date={date} setMeasure={setMeasure} setSpeedMeasure={setSpeedMeasure}/>
        </div>
    );
};

export default Weather;
