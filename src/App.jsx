import React, { useState, useEffect } from "react";
import WeatherCards from "./Components/WeatherCards";
import Prueba from "./Components/prueba";
import "./App.css";
import CurrentWeather from "./Components/CurrentWeather";
import DetailsWeather from "./Components/DetailsWeather";
import ButtonsTemp from "./Components/ButtonsTemp";
import HistoryCity from "./Components/HistoryCity";


function App() {

  
  const [weatherData, setWeatherData] = useState(null);// Define las varibles que almacenan la info del la api
  const [city, setCity] = useState('Bogota');//Define la ciudad que se buscará en el api
  const [units, setUnits] = useState("metric"); //Define el cambio de Unidad de Temperatura
  const [cityHistory, setCityHistory] = useState([]); // se define el estado de almacenamiento en un arreglo del historial de busqueda

  // Utiliza useEffect para hacer una solicitud a la API cuando el componente se monte
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=es&units=${units}&appid=55fed173dbbbae45d6acd4f1a920d2f1`)
      .then((response) => response.json())
      .then((data) => setWeatherData(data));
  }, [city,units]);

  const handleCityChange = (newCity) => {
    setCity(newCity);
    setCityHistory((prevHistory) => [...prevHistory, { name: newCity, date: new Date() }]);
   console.log("Nueva ciudad:",newCity);
  };  

  const handleCityClick = (cityName) => {
    setCity(cityName);
  };

  const handleUnitChange = (newUnits) => {
    setUnits(newUnits);
  };

  console.log("se Cambio la unidad a:", units)

  // Si aún no se han cargado los datos, muestra un mensaje de carga
  if (!weatherData) {
    return <h1 className="error">Cargando...</h1>;
  }

  return (
    <div className="App">
      <CurrentWeather 
      weatherData={weatherData} 
      onCityChange={handleCityChange}
      units={units}
      cityHistory={cityHistory}
      onCityClick={handleCityClick}
      />

      {/* <HistoryCity cityHistory={cityHistory} onCityClick={handleCityClick} /> */}

        <div className="cards">
        <div className="weathercards">
          <WeatherCards
          units={units} 
          city={city}/>
        </div>
        <div className="detailsweather">
          <DetailsWeather weatherData={weatherData} />
        </div>
      </div>
      <ButtonsTemp 
      onUnitsChange={handleUnitChange}/>
    

    {/*   <Prueba/> */}
    </div>
  );
}

export default App;
