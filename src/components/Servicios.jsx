import shape from "../assets/img/category/shape.svg";
import icono1 from "../assets/img/category/icon1.png";
import icono2 from "../assets/img/category/icon2.png";
import icono3 from "../assets/img/category/icon3.png";
import icono4 from "../assets/img/category/icon4.png";
import "./Servicios.css";

function Servicios() {
  return (
    <section className="m-5" id="servicios">
      <div className="container">
        <div className="position-absolute z-index--1 end-0 d-none d-lg-block">
          <img
            loading="lazy"
            width="800"
            height="800"
            src={shape}
            alt="service"
          />
        </div>
        <div className="mb- text-center">
          <h2 className="text-secondary">Servicios </h2>
          <h3 className="fs-xl-10 fs-lg-8 fs-7 fw-bold text-capitalize m-5">
            Lleva tu negocio al siguiente nivel.
          </h3>
        </div>
        <div className="servicios">
          <div className="servicios__cards card service-card shadow-hover">
            <div className="servicios__cards--card">
              <img
                loading="lazy"
                width="800"
                height="800"
                src={icono1}
                alt="Service"
              />
              <h4 className="mb-3">Toma Decisiones con Datos Reales</h4>
              <p className="mb-0 fw-medium">
                Analizamos el mercado, evaluamos tendencias y recopilamos
                información clave, para posicionar tu marca.
              </p>
            </div>
          </div>
          <div className="servicios__cards card service-card shadow-hover">
            <div className="servicios__cards--card card-body p-xxl-5 p-4">
              <img
                loading="lazy"
                width="800"
                height="800"
                src={icono2}
                alt="Service"
              />
              <h4 className="mb-3">Dale voz a tu marca</h4>
              <p className="mb-0 fw-medium">
                En radio, TV y redes sociales. posiciona tu marca.{" "}
              </p>
            </div>
          </div>
          <div className="servicios__cards card service-card shadow-hover">
            <div className="servicios__cards--card">
              <img
                loading="lazy"
                width="800"
                height="800"
                src={icono3}
                alt="Service"
              />
              <h4 className="mb-3">Conecta con tu audiencia</h4>
              <p className="mb-0 fw-medium">
                Estrategias innovadoras para crear experiencias inolvidables.
              </p>
            </div>
          </div>
          <div className="servicios__cards card service-card shadow-hover">
            <div className="servicios__cards--card">
              <img
                loading="lazy"
                width="800"
                height="800"
                src={icono4}
                alt="Service"
              />
              <h4 className="mb-3">Lleva tu negocio al siguiente nivel</h4>
              <p className="mb-0 fw-medium">
                Conecta con nuestro servicio de asesoría en marketing y
                publicidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Servicios;
