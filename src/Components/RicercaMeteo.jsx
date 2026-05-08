import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RicercaMeteo = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("weatherFavs");
    return saved ? JSON.parse(saved) : [];
  });

  const API_KEY = "0a7e4e142c60fb8f5d27277396123085";

  useEffect(() => {
    localStorage.setItem("weatherFavs", JSON.stringify(favorites));
  }, [favorites]);

  const getMeteo = (e) => {
    e.preventDefault();
    if (!city) return;

    setLoading(true);
    setWeather(null);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=it`,
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === 200) setWeather(data);
        else alert("Città non trovata!");
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  const addFavorite = () => {
    if (!weather || favorites.some((f) => f.name === weather.name)) return;
    const newFav = {
      name: weather.name,
      country: weather.sys.country,
      temp: Math.round(weather.main.temp),
      icon: weather.weather[0].icon,
      desc: weather.weather[0].description,
    };
    setFavorites([newFav, ...favorites]);
    setWeather(null);
    setCity("");
  };

  const removeFavorite = (name) => {
    setFavorites(favorites.filter((f) => f.name !== name));
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center mb-5">
        <div className="col-md-6">
          <div className="glass-card p-4 shadow-sm">
            <h1 className="insta-font text-center mb-4 text-dark">
              WeatherGram
            </h1>

            <form onSubmit={getMeteo} className="d-flex gap-2 mb-3">
              <input
                type="text"
                className="form-control search-input"
                placeholder="Cerca città..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? (
                  <span className="spinner-border spinner-border-sm"></span>
                ) : (
                  <i className="bi bi-search"></i>
                )}
              </button>
            </form>

            {loading && (
              <div className="text-center my-4">
                <div className="spinner-grow text-primary" role="status"></div>
                <p className="text-muted small mt-2">
                  Consultando l'oracolo del meteo...
                </p>
              </div>
            )}

            {!loading && weather && (
              <div className="mt-4 p-3 border-top border-light animate__animated animate__fadeIn">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="mb-0 fw-bold">{weather.name}</h5>
                    <p className="mb-0 text-muted">
                      {Math.round(weather.main.temp)}°C -{" "}
                      {weather.weather[0].description}
                    </p>
                  </div>
                  <button
                    onClick={addFavorite}
                    className="btn btn-outline-danger btn-sm rounded-pill"
                  >
                    <i className="bi bi-heart-fill me-1"></i> Salva
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="row g-4">
        {favorites.map((fav, i) => (
          <div key={i} className="col-md-4">
            <div className="insta-post-card">
              <div className="post-header d-flex align-items-center p-3">
                <Link
                  to={`/details/${fav.name}`}
                  className="d-flex align-items-center flex-grow-1 text-decoration-none text-dark"
                >
                  <i className="bi bi-geo-alt-fill text-primary me-2 fs-5"></i>
                  <div className="user-info">
                    <span className="city-name d-block">{fav.name}</span>
                    <span className="post-location small text-muted">
                      {fav.country}
                    </span>
                  </div>
                </Link>
                <button
                  className="btn border-0 p-0"
                  onClick={() => removeFavorite(fav.name)}
                >
                  <i className="bi bi-x-lg text-dark"></i>
                </button>
              </div>

              <Link to={`/details/${fav.name}`}>
                <div className="post-body text-center py-4">
                  <img
                    src={`https://openweathermap.org/img/wn/${fav.icon}@4x.png`}
                    alt="weather"
                    width="120"
                  />
                </div>
              </Link>

              <div className="post-footer p-3">
                <div className="action-icons d-flex justify-content-between align-items-center mb-3">
                  <div className="left-icons d-flex gap-3">
                    <i className="bi bi-heart-fill text-danger fs-4"></i>
                    <i className="bi bi-chat fs-4"></i>
                    <i className="bi bi-send fs-4"></i>
                  </div>
                  <i className="bi bi-bookmark fs-4"></i>
                </div>
                <div className="post-content">
                  <p className="caption mb-0 text-dark">
                    <strong>
                      {fav.name.toLowerCase().replace(/\s/g, "_")}_official
                    </strong>{" "}
                    Oggi a {fav.name} ci sono {fav.temp}°C. {fav.desc}!
                    <i className="bi bi-stars text-warning mx-1"></i>
                    <span className="text-primary d-block mt-1 small">
                      #vibes #weather #mood
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RicercaMeteo;
