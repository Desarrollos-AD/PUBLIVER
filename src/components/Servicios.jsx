import shape from "../assets/img/category/shape.svg";
import icono1 from "../assets/img/category/icon1.png";
import icono2 from "../assets/img/category/icon2.png";
import icono3 from "../assets/img/category/icon3.png";
import icono4 from "../assets/img/category/icon4.png";

function Servicios() {
  return (
    <section className="pt-5 pt-md-9" id="service">
      <div className="container">
        <div className="position-absolute z-index--1 end-0 d-none d-lg-block">
          <img src={shape} alt="service" />
        </div>
        <div className="mb-7 text-center">
          <h2 className="text-secondary">Servicios </h2>
          <h3 className="fs-xl-10 fs-lg-8 fs-7 fw-bold text-capitalize">
            Lleva tu negocio al siguiente nivel.
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-6 mb-6">
            <div className="card service-card shadow-hover rounded-3 text-center align-items-center">
              <div className="card-body p-xxl-5 p-4">
                <img src={icono1} width="75" alt="Service" />
                <h4 className="mb-3">Toma Decisiones con Datos Reales</h4>
                <p className="mb-0 fw-medium">
                  Analizamos el mercado, evaluamos tendencias y recopilamos
                  información clave, para posicionar tu marca.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mb-6">
            <div className="card service-card shadow-hover rounded-3 text-center align-items-center">
              <div className="card-body p-xxl-5 p-4">
                {" "}
                <img src={icono2} width="75" alt="Service" />
                <h4 className="mb-3">Dale voz a tu marca</h4>
                <p className="mb-0 fw-medium">
                  en radio, TV y redes sociales. posiciona tu marca.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mb-6">
            <div className="card service-card shadow-hover rounded-3 text-center align-items-center">
              <div className="card-body p-xxl-5 p-4">
                <img src={icono3} width="75" alt="Service" />
                <h4 className="mb-3">Conecta con tu audiencia</h4>
                <p className="mb-0 fw-medium">
                  Estrategias inovadoras para crear experiencias inolvidables.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mb-6">
            <div className="card service-card shadow-hover rounded-3 text-center align-items-center">
              <div className="card-body p-xxl-5 p-4">
                <img src={icono4} width="75" alt="Service" />
                <h4 className="mb-3">Lleva tu negocio al siguiente nivel</h4>
                <p className="mb-0 fw-medium">
                  Conecta con nuestro servicio de asesoría en marketing y
                  publicidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Servicios;
