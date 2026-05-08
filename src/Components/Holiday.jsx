import { useState, useEffect } from "react";

const TopDestinations = () => {
  const [hotPlaces, setHotPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = "0a7e4e142c60fb8f5d27277396123085";

  const candidateCities = [
    {
      name: "Tenerife",
      img: "https://images.unsplash.com/photo-1581985673473-0784a7a44e39?q=80&w=600",
    },
    {
      name: "Maldives",
      img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=600",
    },
    {
      name: "Dubai",
      img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600",
    },
    {
      name: "Cancun",
      img: "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?q=80&w=600",
    },
    {
      name: "Bali",
      img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600",
    },
    {
      name: "Cairo",
      img: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=600",
    },
  ];

  useEffect(() => {
    candidateCities.forEach((city) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${API_KEY}&units=metric`,
      )
        .then((res) => {
          if (!res.ok) throw new Error("Errore caricamento");
          return res.json();
        })
        .then((data) => {
          const newDest = {
            ...data,
            customImg: city.img,
            customName: city.name,
          };
          setHotPlaces((prev) => [...prev, newDest]);
        })
        .catch((err) => {
          console.error("Errore per " + city.name + ":", err);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  }, []);

  if (loading && hotPlaces.length === 0) {
    return (
      <div className="text-center py-5 text-white">
        Ricerca del sole in corso...
      </div>
    );
  }

  return (
    <section className="dest-wrapper">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="dest-title-main">CHASING THE SUN</h2>
          <p className="dest-title-sub">Il ghiaccio solo nel tuo drink</p>
        </div>

        <div className="dest-grid">
          {hotPlaces.map((place, index) => (
            <div key={index} className="dest-card-col">
              <div className="dest-glass-card">
                <div className="dest-img-area">
                  <img src={place.customImg} alt={place.customName} />
                  <div className="dest-temp-badge">
                    {Math.round(place.main.temp)}°C
                  </div>
                </div>
                <div className="dest-content-area">
                  <h5 className="dest-city-name">{place.customName}</h5>
                  <p className="dest-city-desc">
                    <i className="bi bi-sun-fill me-1"></i>{" "}
                    {place.weather[0].main} / {place.sys.country}
                  </p>
                  <div className="dest-btn-container">
                    <a
                      href="https://www.easyjet.com/it"
                      target="_blank"
                      rel="noreferrer"
                      className="dest-btn dest-btn-easy"
                    >
                      <i className="bi bi-airplane-fill"></i> VOLI
                    </a>
                    <a
                      href={`https://www.booking.com/searchresults.html?ss=${place.customName}`}
                      target="_blank"
                      rel="noreferrer"
                      className="dest-btn dest-btn-book"
                    >
                      <i className="bi bi-building-fill"></i> HOTEL
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 pt-5">
          <h4 className="dest-title-sub text-center mb-4">Travel Essentials</h4>
          <div className="dest-essentials-row">
            <div className="dest-essential-item">
              <i className="bi bi-shield-check dest-icon-box"></i>
              <h6 className="text-white small fw-bold">Protezione 50+</h6>
              <p className="text-white-50" style={{ fontSize: "0.6rem" }}>
                Indispensabile per le Canarie
              </p>
            </div>
            <div className="dest-essential-item">
              <i className="bi bi-lightning-charge dest-icon-box"></i>
              <h6 className="text-white small fw-bold">Power Bank</h6>
              <p className="text-white-50" style={{ fontSize: "0.6rem" }}>
                Per sessioni foto nel deserto
              </p>
            </div>
            <div className="dest-essential-item">
              <i className="bi bi-eyeglasses dest-icon-box"></i>
              <h6 className="text-white small fw-bold">Occhiali Sole</h6>
              <p className="text-white-50" style={{ fontSize: "0.6rem" }}>
                Filtro UV categoria 3
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 pt-5">
          <h4 className="dest-title-sub text-center mb-4">Community Feed</h4>
          <div className="dest-feed-container">
            <div className="dest-feed-post">
              <div className="dest-user-avatar">
                <i className="bi bi-person-fill"></i>
              </div>
              <div className="dest-post-content">
                <span className="dest-post-user">@Marco_Vibe</span>
                <p>Atterrato a Tenerife con EasyJet. 26 gradi stasera.</p>
              </div>
            </div>
            <div className="dest-feed-post">
              <div className="dest-user-avatar">
                <i className="bi bi-person-heart"></i>
              </div>
              <div className="dest-post-content">
                <span className="dest-post-user">@Sara_Explorer</span>
                <p>
                  Trovato resort su Booking tramite questo portale. Esperienza
                  ottima.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;
