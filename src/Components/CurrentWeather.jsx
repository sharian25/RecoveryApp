import React from "react";
import {Box,Card,CardContent,Typography,Button,IconButton,TextField} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import { useState } from "react";

const CurrentWeather = ({ weatherData,onCityChange,units,cityHistory,onCityClick}) => {
  const iconUrl = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const [searchCity, setSearchCity] = useState(false);
  const [error, setError] = useState('');
  const [city, setCity] = useState('');  

  const handleChange = () => { // función que artena la vista de busqueda
    setSearchCity(!searchCity); 
  };

 const handleHistory = (cityName) => {
   handleChange();
   onCityClick(cityName);
  }
 
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setCity ('');
    if (!city) { // Realizar la búsqueda de la ciudad
      setError('El campo está vacío');
    } else {
      setError('');
      onCityChange(city); // Llamar a la función del padre con el valor de la ciudad
    }
  };
  
console.log(weatherData)
console.log(city.className)
  return (
    <Box>
      <Card className="Current">
        <Box
        style={{
            display: searchCity ? "none" : "",
          }}>
            <Button variant="contained" color="primary" onClick={handleChange}>
          Obtener ubicación
        </Button>
        <IconButton color="primary">
          <GpsFixedIcon/>
        </IconButton>
        </Box>
        <Box style={{
            display: !searchCity ? "none" : "",
          }}>
            <form onSubmit={handleSubmit}>
                <TextField
                 value={city}
                 onChange={(event) => setCity(event.target.value)}
                 variant="outlined"
                />
      <Button onClick={handleChange} type="submit" variant="contained" color="primary">
        Buscar
      </Button>
      {error && <p className="error">{error}</p>}

    </form>
            <Button color="primary" onClick={handleChange}>X</Button> <br />

            <div>
      <h2>Historial de Ciudades</h2>
      <ul className="list">
        {cityHistory.map((city) => (
          <li key={city.name} onClick={() => handleHistory(city.name)}>
            {city.name}
          </li>
        ))}
      </ul>
    </div>
            
        </Box>

       
        <CardContent
          style={{
            display: searchCity ? "none" : "",
            marginTop: "200px",
          }}
        >
          <img src={iconUrl} alt="Weather icon" />
          <Typography variant="h4">{weatherData.name}</Typography>
          <Typography>{weatherData.weather[0].description}</Typography>
          <Typography>Tem: {weatherData.main.temp} {units === "metric" ? <span>°C</span> : <span>°F</span>} </Typography>
          <Typography>Humedad: {weatherData.main.humidity}%</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CurrentWeather;
