import { Weather } from "./components/weatherInfo"

function App() {
  return (
    <>
      <h1>Weather app</h1>
      <input type="text" placeholder="input your city"/>
      <button>search</button>
      <div>
        <Weather name="Kyiv"/>
        <h2>City</h2>
        <p>temperature</p>
        <p>Clear</p>
      </div>
    </>
  ) 
}

export default App