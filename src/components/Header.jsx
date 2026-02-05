import hero from "../assets/img/hero/hero-img.png";
import "./Header.css";

function Header() {
  return (
    <section id="inicio">
      <div className="bg-holder"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 col-lg-6 order-0 order-md-1 text-end">
            <img
              className="pt-7 pt-md-0 hero-img"
              src={hero}
              alt="hero-header"
              height="900"
              width="900"
              fetchpriority="high"
            />
          </div>
          <div className="col-md-7 col-lg-6 text-md-start text-center py-6">
            <h4 className="fw-bold mb-3  text-danger">
              Convertimos tus ideas en impactos.
            </h4>
            <h1 className="hero-title fw-bold  mb-3">
              Haz que tu marca brille.
            </h1>
            <p className="mb-4 fw-medium">
              soluciones estratégicas para que tu negocio llegue más lejos.
              <br className="d-none d-xl-block" />
              Nos aseguramos de que tu mensaje llegue a la audiencia correcta en
              el momento adecuado.
              <br className="d-none d-xl-block" />
            </p>
            <div className="text-center text-md-start">
              <a
                className="btn btn-primary btn-lg me-md-4 mb-3 mb-md-0 border-0 primary-btn-shadow"
                href="#contacto"
                role="button"
              >
                Conoce más
              </a>
              <div
                className="modal fade"
                id="popupVideo"
                tabindex="-1"
                aria-labelledby="popupVideo"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
