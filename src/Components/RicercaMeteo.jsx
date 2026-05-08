import { useState, useEffect } from "react";

const RicercaMeteo = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("weatherFavs");
    return saved ? JSON.parse(saved) : [];
  });

  const API_KEY = "0a7e4e142c60fb8f5d27277396123085";

  useEffect(() => {
    localStorage.setItem("weatherFavs", JSON.stringify(favorites));
  }, [favorites]);

  const getMeteo = async (e) => {
    e.preventDefault();
    if (!city) return;
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=it`,
      );
      const data = await res.json();
      if (data.cod === 200) setWeather(data);
    } catch (err) {
      console.error("Errore", err);
    }
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
          <div className="glass-card p-4">
            <h1 className="insta-font text-center mb-4 text-dark">
              WeatherGram
            </h1>
            <form onSubmit={getMeteo} className="d-flex gap-2">
              <input
                type="text"
                className="form-control search-input"
                placeholder="Cerca città..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <button type="submit" className="btn btn-primary">
                <i className="bi bi-search"></i>
              </button>
            </form>

            {weather && (
              <div className="mt-4 p-3 border-top border-light animate__animated animate__fadeIn">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="mb-0 fw-bold">
                      {weather.name}, {weather.sys.country}
                    </h5>
                    <p className="mb-0">
                      {weather.main.temp}°C - {weather.weather[0].description}
                    </p>
                  </div>
                  <button
                    onClick={addFavorite}
                    className="btn btn-outline-danger"
                  >
                    <i className="bi bi-heart-fill me-2"></i>Salva
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
                <i className="bi bi-geo-alt-fill text-primary me-2 fs-5"></i>
                <div className="flex-grow-1">
                  <span className="city-name d-block">{fav.name}</span>
                  <span className="post-location small">{fav.country}</span>
                </div>
                <button
                  className="btn border-0 p-0"
                  onClick={() => removeFavorite(fav.name)}
                >
                  <i className="bi bi-x-lg text-dark"></i>
                </button>
              </div>

              <div className="post-body text-center py-4">
                <img
                  src={`https://openweathermap.org/img/wn/${fav.icon}@4x.png`}
                  alt="weather"
                  width="120"
                />
              </div>

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
                    </strong>
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
