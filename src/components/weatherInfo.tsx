import { useEffect, useState } from "react"
import { getWeatherInfo } from "../services/weatherAPI";

type weatherType = {
    name: string
}

export function Weather({name}: weatherType){
    const[city, setCity] = useState<any>(null)

    useEffect(()=>{
        const fetchWeatherData = async ()=>{
            const getInfo = await getWeatherInfo(name);
            console.log(getInfo)
            setCity(getInfo)
        }
        fetchWeatherData()
    },[name])
    
    return(
        <div>
            <h1>Name: </h1>
            <p>{city?.name}</p>
        </div>
    )
}