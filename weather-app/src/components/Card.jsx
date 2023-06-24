import React from 'react';

const Card = (props) => {

    const {forecastData, measure, speedMeasure, localTime, city, region, tempF,
    feelsLikeF, tempC, feelsLikeC, gustM, gustK, windM, windK, date, setMeasure, setSpeedMeasure} = props;

    console.log(forecastData);

    return (
        <div className="mt-10 bg-stone-100 p-3 w-5/12 rounded-sm h-3/4 border-4 border-sky-500 rounded-lg">
            <div className="flex justify-between border-b-4">
                <div className="">
                    <h2 className="text-3xl font-bold">{city}</h2>
                    <p><span className="text-xl font-bold">{region}</span></p>
                </div>
                <div className="content-center">
                    <p>LocalTime: {localTime}</p>
                </div>
            </div>
                <br></br>
            <div>
                <div>
                   {/* {
                    forecastData.map((item) => {
                        return <div>
                        item? {item}
                        </div>
                    })
                   } */}
                </div>
                {/* <div className="flex justify-between">
                    {
                        measure === "fahrenheit"? (
                            <div>
                                <p className="text-yellow-400 text-xl font-bold">{tempF}°</p>
                                <br></br>
                                <p className="text-gray-400 text-sm font-bold">Feels Like: {feelsLikeF}°</p>
                            </div>
                        ) : (
                            <div>
                                <p className="text-yellow-400 text-xl font-bold">{tempC}°</p>
                                <br></br>
                                <p className="text-gray-400 text-sm font-bold">Feels Like: {feelsLikeC}°</p>
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
                        {
                            speedMeasure === "mph" ? (
                                <div className="font-bold">
                                    <p className="text-gray-400 text-sm">Wind: {windM}-mph</p>
                                    <p className="text-gray-400 text-sm">Gust: {gustM}-mph</p>
                                </div>
                            ) : (
                                <div className="font-bold">
                                    <p className="text-gray-400 text-sm">Wind: {windK}-mph</p>
                                    <p className="text-gray-400 text-sm">Gust: {gustK}-mph</p>
                                </div>
                        )}
                    <form>
                        <select onChange={(e) => {setSpeedMeasure(e.target.value)}}>
                            <option value="mph">MPH</option>
                            <option value="kph">KPH</option>
                        </select>
                    </form>
                </div> */}
            </div>
            {/* <div className="border-2">
                {
                    forecastData.map((item) => {
                        return <div>
                        {item}
                        </div>
                    })
                }
            </div> */}
        </div>
    );
};

export default Card;
