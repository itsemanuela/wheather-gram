import { useState } from "react";
import { Link } from "react-router-dom";

const Player = () => {
  const [activeMood, setActiveMood] = useState("sunset");

  return (
    <section className="dest-wrapper min-vh-100">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="dest-title-main"> SOUND OF SUN</h2>
          <p className="dest-title-sub">
            Scegli il tuo mood, noi mettiamo la musica
          </p>
        </div>

        <div className="row g-3 justify-content-center mb-5">
          <div className="col-6 col-md-3">
            <button
              onClick={() => setActiveMood("sunset")}
              className={`dest-mood-card ${activeMood === "sunset" ? "active" : ""}`}
            >
              <i className="bi bi-brightness-alt-high dest-icon-box mb-2"></i>
              <span className="dest-mood-label">Sunset Chill</span>
            </button>
          </div>

          <div className="col-6 col-md-3">
            <button
              onClick={() => setActiveMood("energy")}
              className={`dest-mood-card ${activeMood === "energy" ? "active" : ""}`}
            >
              <i className="bi bi-lightning-charge-fill dest-icon-box mb-2"></i>
              <span className="dest-mood-label">Pure Energy</span>
            </button>
          </div>

          <div className="col-6 col-md-3">
            <button
              onClick={() => setActiveMood("road")}
              className={`dest-mood-card ${activeMood === "road" ? "active" : ""}`}
            >
              <i className="bi bi-ev-front-fill dest-icon-box mb-2"></i>
              <span className="dest-mood-label">Road Trip</span>
            </button>
          </div>

          <div className="col-6 col-md-3">
            <button
              onClick={() => setActiveMood("relax")}
              className={`dest-mood-card ${activeMood === "relax" ? "active" : ""}`}
            >
              <i className="bi bi-water dest-icon-box mb-2"></i>
              <span className="dest-mood-label">Deep Relax</span>
            </button>
          </div>
        </div>

        <div className="dest-mockup-screen">
          <div className="dest-screen-header">
            <div className="dest-dot red"></div>
            <div className="dest-dot yellow"></div>
            <div className="dest-dot green"></div>
          </div>

          <div className="dest-screen-content">
            <div className="dest-now-playing">
              <div className="dest-album-art">
                <i className="bi bi-spotify"></i>
              </div>
              <div className="dest-track-info">
                <h4 className="dest-track-title">Destinazione: Buon Umore!</h4>
                <p className="dest-track-artist">Your Travel Soundtrack</p>
              </div>
            </div>

            <div className="dest-fake-wave">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <a
              href="http://googleusercontent.com/spotify.com/4"
              target="_blank"
              rel="noreferrer"
              className="dest-btn-spotify-launch"
            >
              <i className="bi bi-spotify me-2"></i>
              APRI SU SPOTIFY
            </a>
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
