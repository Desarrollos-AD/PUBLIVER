import send from "../assets/img/cta/send.png";
import mail from "../assets/img/cta/mail.svg";
import whats from "../assets/img/cta/whats.svg";
import "./Contacto.css";

function Contacto() {
  return (
    <section className="">
      
      <div className="container">
        <div className=" position-relative text-center">
          <div className="position-absolute start-100 top-0 translate-middle ms-md-n7 ms-n4 mt-3">
            <img
              loading="lazy"
              width="800"
              height="800"
              src={send}
              alt="send icon"
            />
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <h2 className="text-secondary fw-black">
                ¿Listo para llevar tu marca al siguiente nivel?
              </h2>
              <h3 className="fs-xl-10 fs-lg-8 fs-7 fw-bold text-capitalize  my-sm-5">
                Nuestro equipo estará complacido de atenderte.
              </h3>
              <form className="row g-3 align-items-center w-lg-75 mx-auto">
                <div className="col-sm-center  my-sm-3">
                  <a
                    href="mailto:pluservespecializados@gmail.com?subject=Estoy%20listo%20para%20mejorar%20mi%20negocio&body=Saludos,%20estoy%20interesado%20en%20sus%20servicios.%20Quiero%20una%20asesoría%20especializada%20en%20materia%20de%20___"
                    className="btn btn-primary btn-lg me-md-4 mb-3 mb-md-0 border-0 primary-btn-shadow"
                  >
                    <img
                      className="input-box-icon me-md-2"
                      src={mail}
                      width="800"
                      height="800"
                      loading="lazy"
                      alt="mail"
                    />
                    Escríbenos
                  </a>
                </div>
                <div className="col-sm-center">
                  <a
                    href="https://wa.me/522292782531?text=Hola,%20estoy%20interesado%20en%20sus%20servicios.%20Quiero%20una%20asesoría%20especializada"
                    className="btn btn-primary btn-lg me-md-4 mb-3 mb-md-0 border-0 primary-btn-shadow"
                  >
                    <img
                      className="input-box-icon me-md-2"
                      src={whats}
                      width="800"
                      height="800"
                      loading="lazy"
                      alt="whatsapp"
                    />
                    Escríbenos
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
