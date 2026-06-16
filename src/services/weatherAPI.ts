const api_key = "97c4c44ab1814f53b9a154443261506";

export async function getWeatherInfo(city:string) {
    const url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`;

    if(!city)
        return null
    const result = await fetch(url);
    if(!result.ok)
        throw new Error('There`s something wrong')
    const weatherInfo = await result.json()

    console.log(weatherInfo)
    return {
        name: weatherInfo.location.name,
        region: weatherInfo.location.region,
        temperature: weatherInfo.current.temp_c,
        wind_kph: weatherInfo.current.wind_kph,
        humidity: weatherInfo.current.humidity,
        icon: weatherInfo.current.condition.icon,
        iconText: weatherInfo.current.condition.text
    };
}