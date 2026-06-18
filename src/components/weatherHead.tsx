import { useState, useContext } from "react"
import {CurrentCityName} from "../App"

function WeatherHead(){
    var dataContext = useContext(CurrentCityName)
    const [cityName, setCityName] = useState<string | null>(null);
    
    const searchCity = ()=>{
        dataContext?.setDataCont(cityName)
    }
    const searchCityKey = (e)=>{
        if(e.key ==='Enter') 
            dataContext?.setDataCont(cityName)
    }

    return(
        <div>
            <h1>Weather app</h1>
            <input 
                onChange={e => { setCityName(e.target.value)}} 
                onKeyDown={searchCityKey}
                type="text" placeholder="input your city"
            />
            <button onClick={searchCity}>search</button>
        </div>
        
    )
}

export default WeatherHead