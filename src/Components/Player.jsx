import { useState } from "react";
import { Link } from "react-router-dom";

const Player = () => {
  const [activeMood, setActiveMood] = useState("sunset");

  return (
    <section className="dest-wrapper min-vh-100 py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="dest-title-main text-white fw-bold">SOUND OF SUN</h2>
          <p className="dest-title-sub text-white-50">
            Scegli il tuo mood, noi mettiamo la musica
          </p>
        </div>

        <div className="row g-3 justify-content-center mb-5">
          {[
            {
              id: "sunset",
              label: "Sunset Chill",
              icon: "bi-brightness-alt-high",
            },
            {
              id: "energy",
              label: "Pure Energy",
              icon: "bi-lightning-charge-fill",
            },
            { id: "road", label: "Road Trip", icon: "bi-ev-front-fill" },
            { id: "relax", label: "Deep Relax", icon: "bi-water" },
          ].map((mood) => (
            <div
              key={mood.id}
              className="col-6 col-md-3 d-flex justify-content-center"
            >
              <button
                onClick={() => setActiveMood(mood.id)}
                className={`dest-mood-card border-0 ${activeMood === mood.id ? "active" : ""}`}
              >
                <i className={`bi ${mood.icon}`}></i>
                <span className="dest-mood-label">{mood.label}</span>
              </button>
            </div>
          ))}
        </div>

        <div className="dest-mockup-screen">
          <div className="dest-screen-header">
            <div className="dest-dot red"></div>
            <div className="dest-dot yellow"></div>
            <div className="dest-dot green"></div>
          </div>

          <div className="dest-screen-content text-center p-4">
            <div className="dest-now-playing">
              <div className="dest-album-art-spotify">
                <i className="bi bi-spotify dest-spotify-rotate"></i>
              </div>

              <div className="dest-track-info">
                <h4 className="dest-track-title">
                  Sound of {activeMood.toUpperCase()}
                </h4>
                <p className="dest-track-artist">YOUR TRAVEL SOUNDTRACK</p>
              </div>
            </div>

            <div className="dest-fake-wave">
              {[...Array(6)].map((_, i) => (
                <span key={i} style={{ animationDelay: `${i * 0.1}s` }}></span>
              ))}
            </div>

            <button
              className="dest-btn-spotify-launch w-100 py-3 border-0 rounded-pill fw-bold"
              onClick={() => window.open("https://open.spotify.com", "_blank")}
              style={{ background: "#1db954", color: "white" }}
            >
              <i className="bi bi-spotify me-2"></i>
              APRI SU SPOTIFY
            </button>
          </div>
        </div>

        <div className="text-center mt-5">
          <Link
            to="/Esplora"
            className="dest-btn dest-btn-book d-inline-flex px-4 text-decoration-none"
          >
            <i className="bi bi-arrow-left me-2"></i> Torna alle Destinazioni
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Player;
