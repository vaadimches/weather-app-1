import { useEffect, useState, useContext } from "react"
import { getWeatherInfo } from "../services/weatherAPI";
import {CurrentCityName} from "./../App"


type weatherType = {
    name: string,
    region: string,
    temperature: number,
    wind_kph: number,
    humidity: number,
    icon: string,
    iconText: string,
    localtime: string
}

export function WeatherInfo(){
    const[city, setCity] = useState<weatherType>(null)
    var dataContext = useContext(CurrentCityName)

    useEffect(()=>{
        const fetchWeatherData = async ()=>{
            const getInfo = await getWeatherInfo(dataContext?.dataCont);
            setCity(getInfo)
        }
        fetchWeatherData()
    },[dataContext?.dataCont])
    return(
        <div>
            {city?.name ? <p>{city?.name}</p> : <p>Please enter your city</p>}
            <p>{city?.region}</p>
            <p>{city?.localtime}</p>
            <p>temperature: {city?.temperature} °C</p>
            <p>wind: {city?.wind_kph}kph</p>
            <p>humidity: {city?.humidity}%</p>
            <p>{city?.iconText}</p>
            <img src={city?.icon} alt={city?.iconText} />
        </div>
    )
}