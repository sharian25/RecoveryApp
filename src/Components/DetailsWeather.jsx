// Componente que muestra las especificaciones de la ciudad buscada
import React from 'react'
import { Grid, Card, CardContent, Typography } from '@mui/material';


function DetailsWeather({weatherData}) {

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={4}>
        <Card style={{ height: 200 }}>
          <CardContent>
            <Typography variant="h5">Velocidad del viento</Typography>
            <Typography>{weatherData.wind.speed} m/s</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} md={4}>
        <Card style={{ height: 200 }}>
          <CardContent>
            <Typography variant="h5">Humedad</Typography>
            <Typography>{weatherData.main.humidity}%</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} md={4}>
        <Card style={{ height: 200 }}>
          <CardContent>
            <Typography variant="h5">Presión</Typography>
            <Typography>{weatherData.main.pressure} hPa</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} md={4}>
        <Card style={{ height: 200 }}>
          <CardContent>
            <Typography variant="h5">Ubicación</Typography>
            <Typography>Latitud: {weatherData.coord.lat}</Typography>
            <Typography>Longitud: {weatherData.coord.lon}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
  


export default DetailsWeather