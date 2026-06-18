import { WeatherInfo } from "./components/weatherInfo"
import WeatherHead from "./components/weatherHead";
import { createContext, useState } from "react"

export const CurrentCityName = createContext(null)

function App() {
  const [dataCont, setDataCont] = useState<string | undefined>(null)

  return (
    <>
    <CurrentCityName value={{dataCont, setDataCont}}>
      <WeatherHead />
      <WeatherInfo />
    </CurrentCityName>
    </>
  ) 
}

export default App