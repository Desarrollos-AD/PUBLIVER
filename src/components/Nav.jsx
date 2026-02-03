import logo from "../assets/img/logo.svg";
import { useNavigate, useLocation } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (id) => {
    if (location.pathname !== "/") {
      // ir a inicio y guardar sección
      navigate("/", { state: { scrollTo: id } });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className=" navbar navbar-expand-lg navbar-light fixed-top py-5 d-block backdrop padding-transition "
      data-navbar-on-scroll="data-navbar-on-scroll"
    >
      <div className="container">
        <button onClick={() => navigate("/")}>
          <img src={logo} height="48" alt="logo" />
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"> </span>
        </button>
        <div
          className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto pt-2 pt-lg-0 font-base align-items-lg-center align-items-start">
            <li className="nav-item px-3 px-xl-4">
              <button
                onClick={() => goToSection("inicio")}
                className="nav-link"
              >
                Inicio
              </button>
            </li>
            <li className="nav-item px-3 px-xl-4">
              <button
                onClick={() => goToSection("servicios")}
                className="nav-link"
              >
                Servicios
              </button>
            </li>
            <li className="nav-item px-3 px-xl-4">
              <button
                onClick={() => goToSection("nosotros")}
                className="nav-link"
              >
                Nosotros
              </button>
            </li>
            <li className="nav-item px-3 px-xl-4">
              <button
                onClick={() => goToSection("catalogo")}
                className="nav-link"
              >
                Catálogo
              </button>
            </li>
            <li className="nav-item px-3 px-xl-4">
              <button
                onClick={() => goToSection("contacto")}
                className="nav-link"
              >
                Contacto
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
