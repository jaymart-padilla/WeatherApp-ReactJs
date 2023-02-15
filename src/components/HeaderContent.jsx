import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useWeatherContext } from "../context/WeatherProvider";

export default function HeaderContent() {
  let {
    location: { region, localtime },
    current: { temp_c, feelslike_c, condition },
    forecast: {
      forecastday: [{ date }],
      forecastday: [{ hour }],
    },
    alerts,
  } = useWeatherContext();

  // !"if you want to" exclude all time in the forecast that had gone pass through the current time
  // const hourlyForecastTime = hour.map((h) => {
  // format forecast hour time to be hour(numbers) and filter out those preceding time
  // const time = new Date(h.time).getHours();
  // const currentTime = localtime.getHours();
  // return currentTime <= time;
  // });

  return (
    <article
      className="container py-4 text-light d-flex flex-column"
      id="header-content"
    >
      {/* header */}
      <div className="d-flex justify-content-between fw-semibold">
        <p>{region}</p>
        <p>
          {/* Time format: (x)x:yy ZZ */}
          {new Date(localtime).toLocaleTimeString("en-US", {
            hour12: true,
            hour: "numeric",
            minute: "2-digit",
          })}
        </p>
      </div>
      {/* main */}
      <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
        <p className="display-1">{temp_c}&deg;C</p>
        <div className="d-flex gap-2">
          <p>Feels like {feelslike_c}&deg;C</p>
          <div className="vr"></div>
          <p className="text-center">
            {condition.text}
            <img src={condition.icon} width="32px" alt={condition.text} />
          </p>
        </div>

        {/* alerts - if there are some */}
        {!!Object.keys(alerts.alert).length ? (
          <div className="d-flex gap-2">
            {alerts.alert.map((alert, index) => {
              return (
                <div
                  className="alert alert-danger text-center mt-2"
                  role="alert"
                  key={index}
                >
                  <strong className="lead fw-semibold d-flex justify-content-center align-items-center gap-2 text-uppercase">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-exclamation-triangle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                    {alert.event}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-exclamation-triangle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                  </strong>
                  <p className="mt-2">{alert.headline}</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>

      {/* footer */}
      {!!hour.length ? (
        <>
          {/* label */}
          <div className="d-flex justify-content-between">
            <p>
              Hourly Forecast
              <span className="text-muted fw-light"> ( Today ) </span>:
            </p>
            <p>{new Date(date).toLocaleDateString("en-us")}</p>
          </div>
          <hr className="text-secondary mt-0" />
          {/* hourly forecast carousel */}
          <div id="hourlyForecastCarousel" className="carousel slide">
            <div className="carousel-inner">
              {(() => {
                const LIMIT = 5;
                // create a copy of hour (splice will be used for this array || im copying coz it modifies the actual array)
                const forecastHours = [...hour];
                let forecasts = [];

                // divide forecastHours (array of forecast in a day (per hour) by 'LIMIT')
                while (!!forecastHours.length) {
                  const splicedHours = forecastHours.splice(0, LIMIT);
                  let forecastHour = splicedHours.map((forecast) => {
                    let { temp_c, time, condition } = forecast;
                    time = getHour(forecast.time);

                    // carousel item sub(children's) children
                    return (
                      <div
                        className={`flex-column ${
                          time === getHour(localtime)
                            ? "fw-semibold"
                            : "text-secondary fw-light"
                        }`}
                      >
                        <p className="small text-center">
                          <strong>{temp_c}&deg;C</strong>
                          <img
                            src={condition.icon}
                            width="32px"
                            alt="weather-condition"
                          />
                        </p>
                        <i className="fas fa-sun fa-2x mb-3"></i>
                        <p className="mb-0">
                          <strong>{time}</strong>
                        </p>
                      </div>
                    );
                  });

                  // if currentTime is in splicedArray then show it as an active carousel item
                  const isCurrentHourForecast = splicedHours.find(
                    (splicedHour) => {
                      return getHour(splicedHour.time) === getHour(localtime);
                    }
                  );

                  // create a new carousel item div to be appended to the 'forecasts' array
                  let newForecastHour = (
                    <div
                      className={`carousel-item ${
                        isCurrentHourForecast ? "active" : ""
                      }`}
                      key={Math.random()}
                    >
                      <div className="d-flex justify-content-around text-center mb-4 py-2">
                        {...forecastHour}
                      </div>
                    </div>
                  );

                  // array of carousel items that will be render
                  forecasts = [...forecasts, newForecastHour];
                }
                return forecasts;
              })()}
            </div>

            {/* prev btn */}
            <button
              className="carousel-control-prev justify-content-start"
              type="button"
              data-bs-target="#hourlyForecastCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            {/* next btn */}
            <button
              className="carousel-control-next justify-content-end"
              type="button"
              data-bs-target="#hourlyForecastCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </>
      ) : null}
    </article>
  );
}

function getHour(time) {
  return new Date(time).toLocaleTimeString("en-US", {
    hour12: true,
    hour: "numeric",
  });
}
