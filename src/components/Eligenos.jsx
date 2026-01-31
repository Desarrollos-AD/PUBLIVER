import taxi from "../assets/img/steps/taxi.svg";
import water from "../assets/img/steps/water-sport.svg";

function Eligenos() {
  return (
    <section id="booking">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="mb-4 text-center">
              <h5 className="text-secondary">¡No esperes más! </h5>
              <h3 className="fs-xl-10 fs-lg-8 fs-7 fw-bold text-capitalize">
                ¡Impulsa tu marca en 3 simples pasos!
              </h3>
            </div>
            <div className="d-flex justify-content-center align-items-start mb-5">
              <div className="bg-primary me-sm-4 me-3 p-3">
                <img src={water} width="22" alt="steps" />
              </div>
              <div>
                <h5 className="text-secondary fw-bold fs-0">
                  Explora Nuestras Soluciones
                </h5>
                <p>
                  Descubre nuestras estrategias publicitarias diseñadas para
                  posicionar tu marca en el mercado.
                  <br className="d-none d-sm-block" /> Desde relaciones públicas
                  hasta marketing digital, tenemos lo que necesitas.
                </p>
                <div className="d-flex justify-content-center align-items-center">
                  <a
                    href="/Catalogo_publiver.pdf"
                    className="btn btn-danger red-gradient-btn fs--1"
                  >
                    <img
                      className="input-box-icon"
                      src={taxi}
                      width="17"
                      alt="mail"
                    />
                    Consulta nuestro catalogo
                  </a>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-start mb-5">
              <div className="bg-danger me-sm-4 me-3 p-3">
                <img src={water} width="22" alt="steps" />
              </div>
              <div>
                <h5 className="text-secondary fw-bold fs-0">
                  Selecciona el Servicio Ideal
                </h5>
                <p>
                  Elige la estrategia que mejor se adapte a tu negocio.
                  ¿Necesitas fortalecer tu identidad de marca, ampliar tu
                  alcance o mejorar tu comunicación?
                  <br className="d-none d-sm-block" /> Encuentra la solución
                  perfecta con Publiver.
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-start mb-5">
              <div className="bg-info me-sm-4 me-3 p-3">
                <img src={taxi} width="22" alt="steps" />
              </div>
              <div>
                <h5 className="text-secondary fw-bold fs-0">
                  Solicita una Consultoría Personalizada
                </h5>
                <p>
                  Hablemos sobre cómo podemos hacer que tu marca brille.
                  <br className="d-none d-sm-block" /> Agenda una consultoría
                  con nuestro equipo y diseñemos juntos la mejor estrategia para
                  ti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Eligenos;
