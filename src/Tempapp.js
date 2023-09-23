import React, { useEffect, useState } from "react";
import "./App.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Pune");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2f1c05eca15ca522a7e7862648342d52`;
      const response = await fetch(url);
      const resJson = await response.json();

      setCity(resJson);
    };

    fetchApi();
  }, [search]);

  return (
    <>
      <div
        style={{
          backgroundSize: `cover`,
        }}
      >
        <div className="Box">
          <div className="card">
            <div style={{ height: 20 }}></div>
            <div className="searchTab">
              <input
                type="search"
                className="searchField"
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              />
              {!city ? (
                <p>Data not found</p>
              ) : (
                <div>
                  <div className="info">
                    <h1 className="location">{search}</h1>

                    {city.main && (
                      <>
                        <h2 className="temp">{city.main.temp}°C</h2>
                        <h3 className="tempMinMax">
                          Min :{city.main.temp_min}°C | Max :
                          {city.main.temp_max}°C
                        </h3>
                        <h3 className="humidity">
                          Humidity :{city.main.humidity}g.m-3
                        </h3>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tempapp;
