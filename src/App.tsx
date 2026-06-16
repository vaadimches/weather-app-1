import { Weather } from "./components/weatherInfo"
import { useState } from "react"

function App() {
  const [cityName, setCityName] = useState<string>(null);
  const [cityFlagSearch, setCityFlagSearch] = useState<string>(null)

  const searchCity = ()=>{
    setCityName(cityFlagSearch)
  }

  return (
    <>
      <h1>Weather app</h1>
      <input 
        onChange={e => { setCityFlagSearch(e.target.value)}} 
        onKeyDown={e=>{if(e.key ==='Enter') setCityName(cityFlagSearch)}}
        type="text" placeholder="input your city"
      />
      <button onClick={searchCity}>search</button>
      <Weather city={cityName} />
    </>
  ) 
}

export default App