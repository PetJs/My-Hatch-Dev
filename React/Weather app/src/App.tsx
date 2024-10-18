import { useState } from 'react';
import { FaMapMarker } from  'react-icons/fa';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

const api = {
  key: "f188990606915676a21f09427cd65b55",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [showCard, setShowCard] = useState(false);

  const iconCode = weather?.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

  const dateBuilder = () => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return today.toLocaleDateString(undefined, options);
  }

  const search = async (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === "Enter") {
      try {
        const response = await fetch(`${api.base}weather?q=${query}&appid=${api.key}&units=metric`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        } 
        const result: WeatherResponse = await response.json();
        setWeather(result);
        setQuery('');
        setShowCard(true);
        console.log(result)
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    }
  }

  interface WeatherResponse {
    name: string;
    sys: {
      country: string;
    };
    weather: Array<{ 
      description: string; 
      icon: string; 
      id: number; 
      main: string; 
    }>;
    main: {
      temp: number;
      humidity: number;
    };
    wind: {
      deg: number;
      speed: number;
    };
  }

  const getWeatherClass = (weatherCondition: string) => {
    switch (weatherCondition) {
      case 'Clear':
        return 'clear';
      case 'Clouds':
        return 'clouds';
      case 'Rain':
        return 'rain';
      case 'Snow':
        return 'snow';
      default:
        return '';
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>My Weather App</h1>
        <input 
          type="text" 
          placeholder="Enter your location"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyDown={search}
        />
        <button onClick={() => 
          search({ key: 'Enter' } as React.KeyboardEvent<HTMLInputElement>)
        }>
          Search
        </button>
      </div>

      {showCard && weather && (
        <div className={`card-sec ${getWeatherClass(weather.weather[0].main)}`}>
          
          <h2 className="location"><FaMapMarker/>{weather.name}, {weather.sys.country}</h2>

          <div className="weather-container">
            <div className="weather-icon-main">
              <img src={iconUrl} alt="Weather Icon" />
              <h2>{weather.weather[0].main}</h2>
            </div>

            <div className="weather-details">
              <div className="detail-item">
                <p className="label">Temperature</p>
                <p className="value">{weather.main.temp}°C</p>
              </div>
              <div className="detail-item">
                <p className="label">Humidity</p>
                <p className="value">{weather.main.humidity}%</p>
              </div>
              <div className="detail-item">
                <p className="label">Wind Degree</p>
                <p className="value">{weather.wind.deg}</p>
              </div>
              <div className="detail-item">
                <p className="label">Wind Speed</p>
                <p className="value">{weather.wind.speed}km/h</p>
              </div>
            </div>
          </div>

          <h3 className="date">{dateBuilder()}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
