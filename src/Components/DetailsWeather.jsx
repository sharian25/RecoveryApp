// Componente que muestra las especificaciones de la ciudad buscada
import React from 'react'
import { Grid, Card, CardContent, Typography } from '@mui/material';


function DetailsWeather({weatherData}) {

  return (
    <Grid container spacing={2}>
     <Grid item xs={6} md={4}>
        <Card style={{ height: 200,  
        background: "#1E213A",
        
        }} >
       
          <CardContent>
            <Typography variant="h5" 
            style={{
              color: "#E7E7EB",
              textAlign: "center",
              fontFamily: "Raleway",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
            }}
            >Wind Status</Typography>
            <Typography
            style={{
              color: "#E7E7EB",
              fontFamily: "Raleway",
              fontSize: "55px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              
            }}
            >{weatherData.wind.speed}{" "}
            <span
              style={{
                color: "#E7E7EB",
                fontFamily: "Raleway",
                fontSize: "36px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
              }}
            >
              m/s
            </span></Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} md={4}>
        <Card style={{ height: 200, 
        background: "#1E213A",
        }}>
          <CardContent>
            <Typography variant="h5"
            style={{
              color: "#E7E7EB",
              textAlign: "center",
              fontFamily: "Raleway",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
            }}
            >Humidity</Typography>
            <Typography
            style={{
              color: "#E7E7EB",
              fontFamily: "Raleway",
              fontSize: "55px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              
            }}
            >{weatherData.main.humidity} 
            <span
              style={{
                color: "#E7E7EB",
                fontFamily: "Raleway",
                fontSize: "36px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
              }}
            >
              %
            </span>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} md={4}>
        <Card style={{ height: 200, 
        background: "#1E213A",
        }}>
          <CardContent>
            <Typography variant="h5"
            style={{
              color: "#E7E7EB",
              textAlign: "center",
              fontFamily: "Raleway",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
            }}
            >Air Pressure</Typography>
            <Typography
            style={{
              color: "#E7E7EB",
              fontFamily: "Raleway",
              fontSize: "55px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              
            }}
            >{weatherData.main.pressure} 
            <span
              style={{
                color: "#E7E7EB",
                fontFamily: "Raleway",
                fontSize: "36px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
              }}
            >
            hPa
            </span>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} md={4}>
        <Card style={{ height: 200, 
        background: "#1E213A",
        }}>
          <CardContent>
            <Typography variant="h5"
            style={{
              color: "#E7E7EB",
              textAlign: "center",
              fontFamily: "Raleway",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
            }}
            >Location</Typography>
            <Typography
            style={{
              color: "#E7E7EB",
              fontFamily: "Raleway",
              fontSize: "30px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              
            }}
            >Lat: {weatherData.coord.lat}</Typography> <br/>
            <Typography
            style={{
              color: "#E7E7EB",
              fontFamily: "Raleway",
              fontSize: "30px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              
            }}
            >Lon: {weatherData.coord.lon}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
  


export default DetailsWeather