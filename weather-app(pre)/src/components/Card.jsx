import React from 'react';

const Card = (props) => {

    const {measure, speedMeasure, localTime, city, region, tempF,
    feelsLikeF, tempC, feelsLikeC, gustM, gustK, windM, windK, date, setMeasure, setSpeedMeasure} = props;


    return (
        <div>
            <h2>Hello there</h2>
            <p>Check out the weather for: {city}, {region}</p>
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
                <div>
                    Date: {date}
                </div>
            </div>
        </div>
    );
};

export default Card;
