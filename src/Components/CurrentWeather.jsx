//la el componente mas trabajado de la App, es prácticamente donde corre el App
import React from "react";
import {Box,Card,CardContent,Typography,Button,IconButton,TextField,Grid} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import { useState } from "react";

const CurrentWeather = ({ weatherData,onCityChange,units,cityHistory,onCityClick,}) => {
  const iconUrl = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`; //dir que carga los iconos
  const [searchCity, setSearchCity] = useState(false); // Define la busqueda de las ciudades
  const [error, setError] = useState(''); //se habia implementado para los posibles errores, no se terminó esa parte
  const [city, setCity] = useState("");

  const handleChange = () => {
    // función que artena la vista de busqueda
    setSearchCity(!searchCity);
  };

  const handleHistory = (cityName) => {
    // función para la busqueda en el historial
    handleChange();
    onCityClick(cityName);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCity("");
    if (!city) {
      // Realizar la búsqueda de la ciudad
      setError("El campo está vacío");
    } else {
      setError("");
      onCityChange(city); // Llamar a la función del padre con el valor de la ciudad
    }
  };

  console.log(weatherData)
//console.log(city.className) // visualizaciones en la consola para ver los datos traidos y apoyarse enel proceso
  return (
    <Box>
      <Card className="Current"
      sx={{
        background:"#1E213A"

      }}>
        <Box  // caja de busqueda
          style={{
            display: searchCity ? "none" : "",
          }}
        >
          <Button variant="contained" color="primary" onClick={handleChange}
          
         style={{
          marginTop:"42px",
          marginLeft:"46px",
          width: "161px",
          height: "40px",
          flexShrink: "0",
          background: "#6E707A",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          fontFamily: "Raleway",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "normal"
         }}
          >
            Search for Location
          </Button>
          <IconButton color="primary">
            <GpsFixedIcon 
            sx={{
              marginLeft:"117px",
              marginTop:"50px",
              color:"#E7E7EB"
            }}/>
          </IconButton>
        </Box>
        <Box //caja del formulario
          style={{
            display: !searchCity ? "none" : "",
            marginTop:"82px",
          }}
        > 
        {/* boton de salir */}
          <Button color="primary" onClick={handleChange}
          style={{
            width: "17.58px",
            height: "17.58px",
            flexShrink: "0",
            fill: "#E7E7EB",
            color:"#E7E7EB",
            fontSize:"25px",
            marginLeft:"400px",
            marginTop:"-150px"
          
          }}
          > 
            X
          </Button>
          <form className="form" onSubmit={handleSubmit}>

            <TextField //input
              value={city}
              onChange={(event) => setCity(event.target.value)}
              variant="outlined"
              style={{
                width: "268px",
                height: "48px",
                flexShrink: "0",
                border: "1px solid #E7E7EB",
              }}
              inputProps={{
                style:{ 
                  color:"white"
                }
              }}
            />
            <Button //Boton de buqueda
              onClick={handleChange}
              type="submit"
              variant="contained"
              style={{
                width: "86px",
                height: "48px",
                flexShrink: "0",
                background: "#3C47E9",
                marginLeft:"30px",
              }}



            >
              Buscar
            </Button>
            {error && <p className="error">{error}</p>}
          </form>
          
          
          <div> {/* creación del historial pormedio de unalista */}
            <h2 style={{color:"#7E7E7B"}}>History Search</h2>
            <ul className="list">
              {cityHistory.map((city) => (
                <li key={city.name} onClick={() => handleHistory(city.name)}>
                  {city.name}
                </li>
              ))}
            </ul>
          </div>
        </Box>

        <CardContent //Contenido de la tarjeta
          style={{
            display: searchCity ? "none" : "",
            marginTop: "200px",
          }}
        >
          <img src={iconUrl} alt="Weather icon" 
          style={{
            marginTop:"-150px",
            width: "202px",
            height: "234px",
            flexShrink: "0",
             }}
          />
          
          <Typography
          style={{
            color: "#E7E7EB",
            fontFamily: "Raleway",
            fontSize: "144px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
            marginTop:"87px",
          }}>
          {weatherData.main.temp}{" "}
            {units === "metric" ? <span className="units">°C</span> : <span className="units">°F</span>}{" "}
          </Typography>     
          <Typography
          style={{
            color: "#A09FB1",
            fontFamily: "Raleway",
            fontSize: "36px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            marginTop:"87px",
          }}
          >{weatherData.weather[0].description}</Typography>
          <Box 
          sx={{
            marginTop:"140px",
            display:"flex",
            marginLeft:"117px",
          }}>
         <IconButton color="primary">
            <LocationOnIcon 
            sx={{
              color:"#E7E7EB"
            }}/>
          </IconButton>
           <Typography variant="h4"
           style={{
            color: "#88869D",
            fontFamily: "Raleway",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
           }}
           >{weatherData.name}</Typography>
          </Box>
        </CardContent>
      </Card>
      <Box>
</Box>

    </Box>
  );
};0

export default CurrentWeather;
