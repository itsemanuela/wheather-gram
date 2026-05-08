import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ShareMood = () => {
  useNavigate();

  const [selectedMood, setSelectedMood] = useState("bi-emoji-smile");
  const [text, setText] = useState("");

  return (
    <div className="container-fluid py-5 animate__animated animate__fadeIn">
      <div className="row g-4 justify-content-center">
        <div className="col-lg-3 col-12">
          <div className="glass-card p-4 text-center shadow">
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
              <i
                className={`bi fs-1 cursor-pointer transition-all ${selectedMood === "bi-emoji-smile" ? "bi-emoji-smile-fill text-warning scale-12" : "bi-emoji-smile text-white"}`}
                onClick={() => setSelectedMood("bi-emoji-smile")}
              ></i>
              <i
                className={`bi fs-1 cursor-pointer transition-all ${selectedMood === "bi-emoji-heart-eyes" ? "bi-emoji-heart-eyes-fill text-danger scale-12" : "bi-emoji-heart-eyes text-white"}`}
                onClick={() => setSelectedMood("bi-emoji-heart-eyes")}
              ></i>
              <i
                className={`bi fs-1 cursor-pointer transition-all ${selectedMood === "bi-emoji-sunglasses" ? "bi-emoji-sunglasses-fill text-primary scale-12" : "bi-emoji-sunglasses text-white"}`}
                onClick={() => setSelectedMood("bi-emoji-sunglasses")}
              ></i>
              <i
                className={`bi fs-1 cursor-pointer transition-all ${selectedMood === "bi-emoji-cloud-lightning" ? "bi-emoji-cloud-lightning-fill text-info scale-12" : "bi-emoji-cloud-lightning text-white"}`}
                onClick={() => setSelectedMood("bi-emoji-cloud-lightning")}
              ></i>
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
              <span className="badge bg-light text-dark mb-2 d-inline-block">
                #MeteoMood
              </span>
              <span className="badge bg-light text-dark mb-2 d-inline-block">
                #Spring2024
              </span>
              <span className="badge bg-light text-dark mb-2 d-inline-block">
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
