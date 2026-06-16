import { useEffect, useState } from "react"
import { getWeatherInfo } from "../services/weatherAPI";

type weatherType = {
    name: string,
    region: string,
    temperature: number,
    wind_kph: number,
    humidity: number,
    icon: string,
    iconText: string
}

export function Weather(props){
    const[city, setCity] = useState<weatherType>(null)

    useEffect(()=>{
        const fetchWeatherData = async ()=>{
            const getInfo = await getWeatherInfo(props.city);
            console.log(getInfo)
            setCity(getInfo)
        }
        fetchWeatherData()
    },[props.city])
    
    return(
        <div>
            {city?.name ? <p>{city?.name}</p> : <p>Please enter your city</p>}
            <p>{city?.region}</p>
            <p>temperature: {city?.temperature} °C</p>
            <p>wind: {city?.wind_kph}kph</p>
            <p>humidity: {city?.humidity}%</p>
            <p>{city?.iconText}</p>
            <img src={city?.icon} alt={city?.iconText} />
        </div>
    )
}