import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Ingresos from "./pages/Ingresos";
import Egresos from "./pages/Egresos";
import Reportes from "./pages/Reportes";
import Conciliacion from "./pages/Conciliacion";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ingresos" element={<Ingresos />} />
          <Route path="/egresos" element={<Egresos />} />
          <Route path="/reportes" element={<Reportes />} />
          <Route path="/conciliacion" element={<Conciliacion />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
