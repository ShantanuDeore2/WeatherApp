import { WiHumidity, WiCloud, WiThermometer } from "react-icons/wi";
import { MdVisibility, MdDewPoint } from "react-icons/md";
import { GiWindsock } from "react-icons/gi";
import { Variable } from "./Variable";

export const WeatherData = (props) => {
  let { weatherData, city, isCityEmpty, isLoading } = props;
  if (isCityEmpty) {
    return (
      <>
        <div className="card">Weather Data will be displayed here</div>
      </>
    );
  }

  if (isLoading) {
    return (
      <>
        <div className="card">Loading...</div>
      </>
    );
  }

  return (
    <div className="card">
      <p style={{ fontSize: "20px" }}>
        Current weather in <b>{city}</b>
      </p>

      <p style={{ fontSize: "20px" }}>
        <i>{weatherData.summary}</i>
      </p>

      <div className="weatherCard">
        <Variable
          icon={WiThermometer}
          variableName="Temperature"
          value={weatherData.temperature + "\u2109"}
        />
        <Variable
          icon={WiHumidity}
          variableName="Humidity"
          value={weatherData.humidity + "%"}
        />
        <Variable
          icon={MdDewPoint}
          variableName="Dew Point"
          value={weatherData.dewPoint + "\u2109"}
        />
        <Variable
          icon={WiCloud}
          variableName="Cloud Cover"
          value={weatherData.cloudCover + " oktas"}
        />
        <Variable
          icon={GiWindsock}
          variableName="Wind Speed"
          value={weatherData.windSpeed + " mph"}
        />
        <Variable
          icon={MdVisibility}
          variableName="Visibility"
          value={weatherData.visibility + " mi"}
        />
      </div>
    </div>
  );
};
