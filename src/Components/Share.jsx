import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ShareMood = () => {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState("bi-emoji-smile");
  const [text, setText] = useState("");

  return (
    <div className="container-fluid py-5 animate__animated animate__fadeIn">
      <div className="row g-4 justify-content-center">
        <div className="col-lg-3 col-12">
          <div className="glass-card p-4 text-center shadow mb-4">
            <div className="avatar-main mx-auto mb-3"></div>
            <h5 className="insta-font text-white">Il Tuo Profilo</h5>
            <div className="d-flex justify-content-around mt-4">
              <div className="text-center">
                <h6 className="mb-0 text-white fw-bold">12</h6>
                <small className="text-white-50">Post</small>
              </div>
              <div className="text-center">
                <h6 className="mb-0 text-white fw-bold">450</h6>
                <small className="text-white-50">Views</small>
              </div>
            </div>
          </div>

          <button
            className="btn-simple-player w-100 d-flex align-items-center justify-content-center shadow-sm"
            onClick={() => navigate("/player")}
          >
            <i className="bi bi-spotify me-2 fs-5"></i>
            <span>Scegli la tua Musica</span>
          </button>
        </div>

        <div className="col-lg-5 col-md-10 text-center">
          <div className="d-flex justify-content-between mb-4 pb-2 overflow-hidden">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="story-ring">
                <div className="story-inner">
                  <i
                    className={`bi ${i % 2 === 0 ? "bi-sun" : "bi-cloud-moon"}`}
                  ></i>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card p-4 shadow-lg border-0">
            <div className="d-flex align-items-center mb-4 text-start">
              <div className="avatar-sm me-3"></div>
              <h6 className="mb-0 text-white fw-bold">Nuovo Aggiornamento</h6>
            </div>

            <div className="text-center mb-5">
              <div className="weather-sticker-clean">
                <i className="bi bi-thermometer-half me-1 text-danger"></i>
                <span>24°C</span>
              </div>
              <p className="text-white-50 small mt-3">Italia, Roma</p>
            </div>

            <div className="d-flex justify-content-around mb-5 px-2">
              {[
                "bi-emoji-smile",
                "bi-emoji-heart-eyes",
                "bi-emoji-sunglasses",
                "bi-emoji-cloud-lightning",
              ].map((m) => (
                <i
                  key={m}
                  className={`bi fs-1 cursor-pointer transition-all ${selectedMood === m ? `${m}-fill text-warning scale-12` : `${m} text-white`}`}
                  onClick={() => setSelectedMood(m)}
                  style={{ cursor: "pointer" }}
                ></i>
              ))}
            </div>

            <textarea
              className="form-control mb-4 glass-input text-white"
              placeholder="A cosa stai pensando?"
              rows="3"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>

            <button
              className="btn-insta-full"
              onClick={() =>
                window.open("https://www.instagram.com/", "_blank")
              }
            >
              <i className="bi bi-instagram me-2"></i>
              PUBBLICA ORA
            </button>
          </div>
        </div>

        <div className="col-lg-3 col-12">
          <div className="glass-card p-4">
            <h6 className="text-white mb-4 fw-bold text-start">
              <i className="bi bi-lightning-fill text-warning me-2"></i>Tendenze
            </h6>
            <div className="text-start">
              <span className="badge bg-light text-dark mb-2 d-inline-block me-1">
                #MeteoMood
              </span>
              <span className="badge bg-light text-dark mb-2 d-inline-block me-1">
                #Spring2026
              </span>
              <span className="badge bg-light text-dark mb-2 d-inline-block me-1">
                #SoleOut
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareMood;
