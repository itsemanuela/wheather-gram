import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DettaglioCity = () => {
  const { cityName } = useParams();
  const navigate = useNavigate();

  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "0a7e4e142c60fb8f5d27277396123085";

  useEffect(() => {
    if (!cityName) return;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=it`,
    )
      .then((res) => res.json())
      .then((data) => {
        setCurrent(data);

        return fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric&lang=it`,
        );
      })
      .then((res) => res.json())
      .then((data) => {
        const daily = data.list.filter((item) =>
          item.dt_txt.includes("12:00:00"),
        );
        setForecast(daily);
      })
      .catch((err) => console.error("Errore:", err))
      .finally(() => setLoading(false));
  }, [cityName]);

  if (loading) {
    return (
      <div className="loader-wrapper">
        <div className="custom-loader"></div>
        <p className="loader-text">Recupero dati...</p>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <button
        onClick={() => navigate("/")}
        className="btn btn-link text-dark text-decoration-none mb-4"
      >
        <i className="bi bi-arrow-left fs-3 me-2"></i> Torna al Feed
      </button>

      {current && (
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="glass-card p-5 text-center shadow-sm mb-5">
              <h1 className="display-4 fw-bold">{current.name}</h1>
              <img
                src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`}
                alt="icona meteo"
              />
              <h2 className="display-1 fw-bold">
                {Math.round(current.main.temp)}°C
              </h2>
              <p className="fs-4 text-capitalize text-muted">
                {current.weather[0].description}
              </p>
            </div>

            <h3 className="mb-4 fw-bold">Prossimi giorni</h3>
            <div className="row row-cols-2 row-cols-md-5 g-3">
              {forecast.map((day, i) => (
                <div key={i} className="col">
                  <div className="glass-card p-3 text-center h-100 shadow-sm border-0">
                    <p className="small fw-bold mb-1">
                      {new Date(day.dt * 1000).toLocaleDateString("it-IT", {
                        weekday: "short",
                      })}
                    </p>
                    <img
                      src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                      alt="icon"
                    />
                    <p className="mb-0 fw-bold">
                      {Math.round(day.main.temp)}°C
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DettaglioCity;
