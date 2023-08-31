import React, { useState, useEffect } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

const WeatherCards = ({ city, units }) => { // se pasa los valores de captura y cambio desde App
  const [weatherData, setWeatherData] = useState([]); //Setea los Cambios en Data

  useEffect(() => { //carga el valor inicial del api y solo se vuelve a ejecutar con los valores nuevos
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=40&appid=55fed173dbbbae45d6acd4f1a920d2f1&units=${units}`
    )
      .then((response) => response.json())
      .then((data) => {
        const dailyData = data.list.filter((item, index) => index % 8 === 0);
        setWeatherData(dailyData);
      });
  }, [city, units]);// dependencias de las que dependen los cambios del api

  console.log(weatherData);

  return (
    <Box display="flex" flexDirection="row"> 
      {weatherData.map((day, index) => (
        <Card //la tarjeta del clima una por iteración
          key={index}
          sx={{
            width: "120px",
            Height: "177px",
            flexShrink: "0",
            background: "#1E213A",
            marginRight:"30px"
          }}
        >
          <CardContent
          style={{
            color: "#E7E7EB",
            fontFamily: "Raleway",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
          }}
          >  {/* contenido de las tarjetas de acuerdo a los datos del api */}
            <Typography variant="h6" component="div" align="center"> 
              {new Date(day.dt * 1000).toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
              })}
            </Typography>
            <img
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            />
            <Typography variant="body2" align="center">
              {day.main.temp}{" "}
              {units === "metric" ? <span>°C</span> : <span>°F</span>}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default WeatherCards;
