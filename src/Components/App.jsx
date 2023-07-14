import { useState, useEffect } from "react";
import "../assets/css/App.css";
import Autocomplete from "react-google-autocomplete";
import axios from "axios";
import { WeatherData } from "./WeatherData";
import { REACT_APP_GOOGLE_API_KEY } from "../assets/js/apiKey";
import { REACT_APP_WEATHER_API_KEY } from "../assets/js/apiKey";

function App() {
  const [city, setCity] = useState("New York, NY, USA");
  const [place, setPlace] = useState({ lat: 40.7127753, lng: -74.0059728 });
  const [isLoading, setIsLoading] = useState(false);
  const [isCityEmpty, setIsCityEmpty] = useState(true);
  const [weatherData, setWeatherData] = useState();

  let key = REACT_APP_GOOGLE_API_KEY;
  let weatherKey = REACT_APP_WEATHER_API_KEY;

  // This calls weather app api whenever user enters a city name
  // 'loading' will be displayed until the data is fetched
  useEffect(() => {
    const getWeatherData = async () => {
      setIsCityEmpty(false);
      setIsLoading(true);

      const url = `https://api.ambeedata.com/weather/latest/by-lat-lng?lat=${place.lat}&lng=${place.lng}`;
      const config = {
        headers: {
          "x-api-key": weatherKey,
          "Content-type": "application/json",
        },
      };

      axios
        .get(url, config)
        .then((res) => {
          setIsLoading(false);
          setWeatherData(res.data.data);
        })
        .catch((err) => {
          setIsCityEmpty(true);
          setIsLoading(false);
        });
    };
    getWeatherData();
  }, [place]);

  return (
    <>
      <header>
        <h1>Weather App</h1>
        <p> Get weather information in your city</p>
      </header>
      <main>
        <p style={{ fontSize: "25px" }}>Enter City</p>
        <div className="searchBox">
          <Autocomplete
            apiKey={key}
            onPlaceSelected={(place) => {
              setPlace(place.geometry.location.toJSON());
              setCity(place.formatted_address);
            }}
          />
        </div>

        <WeatherData
          weatherData={weatherData}
          isCityEmpty={isCityEmpty}
          city={city}
          isLoading={isLoading}
        />
      </main>
    </>
  );
}

export default App;
