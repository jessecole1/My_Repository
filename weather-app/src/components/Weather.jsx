import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';
import Form from './Form';
import Card from './Card';


const Weather = (props) => {


    const {theCity} = props;
    const {searchCity} = props;

    
    
    // const [feelsLikeF, setFeelsLikeF] = useState();
    // const [feelsLikeC, setFeelsLikeC] = useState();
    
    // const [gustM, setGustM] = useState();
    // const [gustK, setGustK] = useState();
    
    const [date, setDate] = useState();
    const [localTime, setLocalTime] = useState();
    
    const [city, setCity] = useState();
    const [region, setRegion] = useState();
    const [measure, setMeasure] = useState("fahrenheit");
    const [speedMeasure, setSpeedMeasure] = useState("mph");
    const [forecastDate, setForecastDate] = useState();

    const [hourArray, setHourArray] = useState();
    const [tempF, setTempF] = useState([]);
    const [tempC, setTempC] = useState([]);
    const [windM, setWindM] = useState([]);
    const [windK, setWindK] = useState([]);
    const [humidity, setHumidity] = useState([]);
    const [conditionCode, setConditionCode] = useState([]);
    const [icon, setIcon] = useState();
    const [text, setText] = useState();
    const [timeHour, setTimeHour] = useState();

    const [kss, setKss] = useState();

    
    // let d = new Date().getHours();
    // console.log(d);
    // let arr = [];
    // while (d < 24 && arr.length < 10) {
    //     arr.push(d);
    //     d++;
    // }


    // setHourArray(arr);

    useEffect(() => {
            axios.get(`http://api.weatherapi.com/v1/forecast.json?key=772fe409b0a648b694d213844232006&q=${theCity}`)
                .then((response) => {
                    setCity(response.data.location.name);
                    setLocalTime(response.data.location.localtime);
                    setRegion(response.data.location.region);
                    console.log(response);
                    let fTemps = [];
                    let cTemps = [];
                    let mWinds = [];
                    let kWinds = [];
                    let humidities = [];
                    let conditionCodes = [];
                    let icons = [];
                    let texts = [];
                    let times = [];

                    let d = new Date().getHours();
                    // console.log(d);
                    let arr = [];
                    while (d < 24 && arr.length < 10) {
                        arr.push(d);
                        fTemps.push(response.data.forecast.forecastday[0].hour[d].temp_f);
                        cTemps.push(response.data.forecast.forecastday[0].hour[d].temp_c);
                        mWinds.push(response.data.forecast.forecastday[0].hour[d].wind_mph);
                        kWinds.push(response.data.forecast.forecastday[0].hour[d].wind_kph);
                        humidities.push(response.data.forecast.forecastday[0].hour[d].humidity);
                        conditionCodes.push(response.data.forecast.forecastday[0].hour[d].condition.code);
                        icons.push(response.data.forecast.forecastday[0].hour[d].condition.icon);
                        texts.push(response.data.forecast.forecastday[0].hour[d].condition.text);
                        times.push(response.data.forecast.forecastday[0].hour[d].time);
                        
                        d++;
                    }
                    let ks = [];

                    for (let i = 0; i < arr.length; i++) {
                        let k = {farenTemps: fTemps[i], celcTemps: cTemps[i], mphWinds: mWinds[i], kphWinds: kWinds[i], humidities: humidities[i],
                            conditionCodes: conditionCodes[i], icons: icons[i], texts: texts[i], times: times[i]};
                        ks.push(k);
                    }
                    setKss(ks);
                    console.log(ks);
                    
                    // setHourArray(arr);
                    
                    // setTempF(fTemps);
                    // setTempC(cTemps);
                    // setWindM(mWinds);
                    // setWindK(kWinds);
                    // setHumidity(humidities);
                    // setConditionCode(conditionCodes);
                    // setIcon(icons);
                    // setText(texts);
                    // setTimeHour(times);
                    

                    // fTemps.push(response.data.forecast.forecastday[0].hour[0].temp_f);
                    // fTemps.push(response.data.forecast.forecastday[0].hour[1].temp_f);
                    // fTemps.push(response.data.forecast.forecastday[0].hour[2].temp_f);
                    // fTemps.push(response.data.forecast.forecastday[0].hour[3].temp_f);
                    // fTemps.push(response.data.forecast.forecastday[0].hour[4].temp_f);
                    // fTemps.push(response.data.forecast.forecastday[0].hour[5].temp_f);
                    // fTemps.push(response.data.forecast.forecastday[0].hour[6].temp_f);
                    // fTemps.push(response.data.forecast.forecastday[0].hour[7].temp_f);
                    // fTemps.push(response.data.forecast.forecastday[0].hour[8].temp_f);
                    // fTemps.push(response.data.forecast.forecastday[0].hour[9].temp_f);
                })
                .catch((err) => {
                    console.log(err);
                });
            }, [theCity]);



    return (
        <div style={{height: "800px"}} className="bg-blue-200 h-100% flex justify-center">
            <Card kss={kss} hourArray={hourArray} city={city} localTime={localTime} region={region}/>
        </div>
    );
};

export default Weather;
