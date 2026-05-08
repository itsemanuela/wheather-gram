const PaginaCentrale = () => {
  return (
    <div
      className="container d-flex flex-column align-items-center justify-content-center text-center"
      style={{ minHeight: "80vh" }}
    >
      <div className="glass-card p-5 shadow">
        <h1
          className="display-3 fw-bold text-white mb-4"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Benvenuto su Weather-Gram
        </h1>

        <p
          className="lead text-white mb-5"
          style={{ opacity: 0.9, fontSize: "1.4rem" }}
        >
          Il meteo non è mai stato così social. <br />
          Condividi il cielo della tua città, aggiungi il tuo mood e connettiti
          con i tuoi amici.
        </p>

        <button className="btn-insta">Inizia a esplorare</button>
      </div>
    </div>
  );
};

export default PaginaCentrale;
