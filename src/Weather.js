import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Weather() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=c26243db45e2bdbb8e04719cd2f83393"
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (data == null) {
    return <>Loading</>;
  } else {
    return (
      <div class>
        <div className="Container">
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt={data.weather[0].description}
          />
          <h2>Current weather in {data.name}</h2>
        </div>
        <h2>{data.weather[0].main}</h2>
          <p><b>Temperature:</b> {data.main.temp}</p>
          <p><b>Feels like:</b> {data.main.feels_like}</p>
          <p><b>Wind speed:</b> {data.wind.speed}</p>
          <p><b>Pressure:</b> {data.main.pressure}</p>
          <p><b>Humidity:</b> {data.main.humidity}</p>
      </div>
    );
  }
}
