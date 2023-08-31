import React from 'react'

function HistoryCity({ cityHistory, onCityClick }) {
    return (
      <div>
        <h1>Historial de Ciudades</h1>
        <ul>
          {cityHistory.map((city) => (
            <li key={city.name} onClick={() => onCityClick(city.name)}>
              {city.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }

export default HistoryCity