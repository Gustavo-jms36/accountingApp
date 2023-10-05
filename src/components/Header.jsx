import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Acc-App</h1>
      <nav>
        <ul>
          <li>
            <a onClick={() => navigate("/ingresos")}>ingresos</a>
          </li>
          <li>
            <a onClick={() => navigate("/egresos")}>egresos</a>
          </li>
          <li>
            <a onClick={() => navigate("/reportes")}>reportes</a>
          </li>
          <li>
            <a onClick={() => navigate("/conciliacion")}>conciliacion</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
