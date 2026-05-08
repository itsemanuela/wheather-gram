const RicercaMeteo = () => {
  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "85vh" }}
    >
      <div className="glass-card p-5 shadow text-center">
        <h2
          className="text-white mb-4"
          style={{ fontFamily: "'Dancing Script', cursive", fontSize: "3rem" }}
        >
          Check the vibe!
        </h2>
        <p className="text-white mb-4" style={{ fontSize: "24px" }}>
          Inserisci una città e scopri l'atmosfera di oggi...
        </p>
        <input
          type="text"
          placeholder="Inserisci città..."
          className="form-control mb-3 w-75 mx-auto search-input"
        />
        <button className="btn-insta">Cerca</button>
      </div>
    </div>
  );
};

export default RicercaMeteo;
