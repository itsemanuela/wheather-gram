import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./Components/MyNavbar";
import PaginaCentrale from "./Components/PaginaCentrale";
import RicercaMeteo from "./Components/RicercaMeteo";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DettaglioCity from "./Components/DettaglioCity";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<PaginaCentrale />} />
        <Route path="/RicercaMeteo" element={<RicercaMeteo />} />
        <Route path="/details/:cityName" element={<DettaglioCity />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
