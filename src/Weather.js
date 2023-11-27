import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-danger" />
          </div>
        </div>
      </form>
      <h1>Port Elizabeth</h1>
      <ul>
        <li>Thursday 21:00</li>
        <li>Clear sky</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
            alt="Clear sky"
          />
          6°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 3%</li>
            <li>Humidity: 86%</li>
            <li>Wind: 8 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
