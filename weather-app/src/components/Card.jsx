import React from 'react';
import {sunny} from '../data';

const Card = (props) => {

    const { kss, localTime, city, region, hourArray } = props;

    console.log("hour array: " + hourArray);

    if (!kss) {
        return <div>Check out your cities weather</div>
    }
    
    console.log("kss: " + kss[0].farenTemps);
    // for (let i = 0; i < )

    return (
        <div className="text-white mt-10 bg-gray-700 p-3 w-9/12 rounded-sm h-1/2 border-4 border-sky-500 rounded-lg">
            <div className="flex justify-between border-b-4">
                <div className="">
                    <h2 className="text-3xl font-bold">{city}</h2>
                    <p><span className="text-xl font-bold">{region}</span></p>
                </div>
                <div className="content-center">
                    {/* <p>LocalTime: {localTime}</p> */}
                </div>
            </div>
                <br></br>
            <div>
                <div className="flex justify-evenly">
                    {
                        kss.map((item, key) => {
                            let tt = kss[key].times;
                            let ff = tt[11];
                            ff += tt[12]
                            let dd = parseInt(ff);
                            let string = "";
                            if (dd === 0) {
                                string += dd + " am";
                            }
                            if (dd > 12) {
                                dd -= 12;
                                string += dd + " pm";
                            } else if (dd < 12 && dd !== 0) {
                                string += dd + " am";
                            }
                            return <div className="h-34 border-4 p-4 w-36 rounded-2xl bg-gray-600">
                                {/* <img src={sunny} className="w-12" /> */}
                                <p className="font-bold text-2xl">{string}</p>
                                <p className="font-bold text-2xl">{kss[key].farenTemps}°</p>
                                <img src={kss[key].icons} />
                                <p className="ml-3 mb-4">{kss[key].texts}</p>
                            <table className="w-16 flex:column justify-center">
                                <tr className="flex justify-between w-full ml-3">
                                    <td><span className="text-slate-400">Winds</span></td>
                                    <td>{kss[key].mphWinds}</td>
                                    
                                </tr>
                                <tr className="flex justify-between w-full ml-3">
                                    <td><span className="text-slate-400">Humid</span></td>
                                    <td>{kss[key].humidities}</td>
                                </tr>
                            </table>    
                            </div>
                        })
                    }
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
