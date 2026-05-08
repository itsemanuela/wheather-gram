import { useState } from "react";
import { Link } from "react-router-dom";

const Player = () => {
  const moods = [
    {
      id: "sunset",
      label: "Sunset Chill",
      icon: "bi-brightness-alt-high",
      playlist: "37i9dQZF1DX3u9TSHqVi3u",
    },
    {
      id: "energy",
      label: "Pure Energy",
      icon: "bi-lightning-charge-fill",
      playlist: "37i9dQZF1DXDX06v9vC0oJ",
    },
    {
      id: "road",
      label: "Road Trip",
      icon: "bi-ev-front-fill",
      playlist: "37i9dQZF1DX9wC98u7S79h",
    },
    {
      id: "relax",
      label: "Deep Relax",
      icon: "bi-water",
      playlist: "37i9dQZF1DX4WYpdgoIcnC",
    },
  ];

  const [activePlaylist, setActivePlaylist] = useState(moods[0].playlist);

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
          {moods.map((mood) => (
            <div key={mood.id} className="col-6 col-md-3">
              <button
                onClick={() => setActivePlaylist(mood.playlist)}
                className={`dest-mood-card ${activePlaylist === mood.playlist ? "active" : ""}`}
              >
                <i className={`bi ${mood.icon} dest-icon-box mb-2`}></i>
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

          <div className="dest-screen-content">
            <div className="dest-now-playing">
              <div className="dest-album-art">
                <i className="bi bi-spotify  "></i>
              </div>
              <div className="dest-track-info">
                <h4 className="dest-track-title"> Destinazione: Buon Umore!</h4>
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
              href={`https://open.spotify.com/playlist/${activePlaylist}`}
              target="_blank"
              rel="noreferrer"
              className="dest-btn-spotify-launch"
            >
              <i className="bi bi-spotify me-2 f-2"></i>
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
