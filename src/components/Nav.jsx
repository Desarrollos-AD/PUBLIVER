import logo from "../assets/img/logo.svg";

function Nav() {
  return (
    <nav
      className=" navbar navbar-expand-lg navbar-light fixed-top py-5 d-block backdrop padding-transition "
      data-navbar-on-scroll="data-navbar-on-scroll"
    >
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <img src={logo} height="48" alt="logo" />
        </a>
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
              <a
                className="nav-link"
                aria-current="page"
                href="#service"
              >
                Servicios
              </a>
            </li>
            <li className="nav-item px-3 px-xl-4">
              <a
                className="nav-link"
                aria-current="page"
                href="#destination"
              >
                Nosotros
              </a>
            </li>
            <li className="nav-item px-3 px-xl-4">
              <a
                className="nav-link"
                aria-current="page"
                href="#booking"
              >
                Catalogo
              </a>
            </li>
            <li className="nav-item px-3 px-xl-4">
              <a
                className="nav-link"
                aria-current="page"
                href="#foot"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
