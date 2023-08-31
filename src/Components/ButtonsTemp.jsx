//Componente creado aparte para el cambio de unidades de temperatura
//se hizo aparte por lo cargado y enredoso que podria quedar otro componente
import React, { useState } from "react";
import { Fab, } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function ButtonsTemp({onUnitsChange}) {
  const [units, setUnits] = useState("");

  const onChangeCelcius = () => {
    setUnits("metric");
    onUnitsChange("metric");
  };

  const onChangeFarenheit = () => {
    setUnits("imperial");
    onUnitsChange("imperial");
  };
  console.log(units);

  const theme = createTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#3f50b5",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme} >
      <Fab color="primary" aria-label="add"
      onClick={onChangeCelcius}>
        c°
      </Fab>
      <Fab color="secondary" aria-label="edit"
      onClick={onChangeFarenheit}>
        F°
      </Fab>
      </ThemeProvider>
    </div>
  );
}

export default ButtonsTemp;
