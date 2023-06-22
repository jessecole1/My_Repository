import React from 'react';

const Card = (props) => {

    const {measure, speedMeasure, localTime, city, region, tempF,
    feelsLikeF, tempC, feelsLikeC, gustM, gustK, windM, windK, date, setMeasure, setSpeedMeasure} = props;


    return (
        <div className="mt-10 bg-stone-100 p-3 w-2/12 rounded-sm h-3/4 border-4 border-sky-500 rounded-lg">
            <div className="border-b-4">
                <h2 className="text-3xl font-bold">{city}</h2>
                <p><span className="text-xl font-bold">{region}</span></p>
            </div>
            <div>
                <p>LocalTime: {localTime}</p>
                <br></br>
                <div className="flex justify-between">
                    {
                        measure === "fahrenheit"? (
                            <div>
                                <p className="text-yellow-400 text-xl font-bold">{tempF}°</p>
                                <p className="text-cyan-400">Feels Like: {feelsLikeF}°</p>
                            </div>
                        ) : (
                            <div>
                                <p className="text-yellow-400 text-xl font-bold">{tempC}°</p>
                                <p className="text-cyan-400">Feels Like: {feelsLikeC}°</p>
                            </div>
                    )}
                    <form>
                        <select onChange={(e) => { setMeasure(e.target.value)}}>
                            <option value="fahrenheit">Fahrenheit</option>
                            <option value="celcius">Celcius</option>
                        </select>
                    </form>
                </div>
                <div className="flex justify-between">
                    {/* <div> */}
                        {
                            speedMeasure === "mph" ? (
                                <div className="font-bold">
                                    <p><span className="text-blue-700">Wind: </span>{windM}-mph</p>
                                    <p><span className="text-blue-700">Gust: </span>{gustM}-mph</p>
                                </div>
                            ) : (
                                <div className="font-bold">
                                    <p><span className="text-blue-700">Wind: </span>{windK}-mph</p>
                                    <p><span className="text-blue-700">Gust: </span>{gustK}-mph</p>
                                </div>
                        )}
                    <form>
                        <select onChange={(e) => {setSpeedMeasure(e.target.value)}}>
                            <option value="mph">MPH</option>
                            <option value="kph">KPH</option>
                        </select>
                    </form>
                    {/* </div> */}
                </div>
                <div>
                    Date: {date}
                </div>
            </div>
        </div>
    );
};

export default Card;
