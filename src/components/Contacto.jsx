import send from "../assets/img/cta/send.png";
import mail from "../assets/img/cta/mail.svg";
import whats from "../assets/img/cta/whats.svg";

function Contacto() {
  return (
    <section class="pt-6">
      <div class="container">
        <div
          class="py-8 px-5 position-relative text-center"
          //   style="background-color: rgba(204, 95, 121, 0.2);border-radius: 38px 20px 20px 20px;"
        >
          <div class="position-absolute start-100 top-0 translate-middle ms-md-n3 ms-n4 mt-3">
            <img src={send} alt="send icon" />
          </div>

          <div class="row justify-content-center">
            <div class="col-lg-8 col-md-10">
              <h5 class="text-secondary fw-black">
                ¿Listo para llevar tu marca al siguiente nivel?
              </h5>
              <h3 class="fs-xl-10 fs-lg-8 fs-7 fw-bold text-capitalize">
                Nuestro equipo estara complacido de atenderte.
              </h3>
              <form class="row g-3 align-items-center w-lg-75 mx-auto">
                <div class="col-sm-center">
                  <a
                    href="mailto:pluservespecializados@gmail.com?subject=Estoy%20listo%20para%20mejorar%20mi%20negocio&body=Saludos,%20estoy%20interesado%20en%20sus%20servicios.%20Quiero%20una%20asesoría%20especializada%20en%20materia%20de%20___"
                    class="btn btn-primary btn-lg me-md-4 mb-3 mb-md-0 border-0 primary-btn-shadow"
                  >
                    <img
                      class="input-box-icon"
                      src={mail}
                      width="17"
                      alt="mail"
                    />
                    Escribenos
                  </a>
                </div>
                <div class="col-sm-center">
                  <a
                    href="https://wa.me/522292782531?text=Hola,%20estoy%20interesado%20en%20sus%20servicios.%20Quiero%20una%20asesoría%20especializada"
                    class="btn btn-primary btn-lg me-md-4 mb-3 mb-md-0 border-0 primary-btn-shadow"
                  >
                    <img
                      class="input-box-icon"
                      src={whats}
                      width="17"
                      alt="whatsapp"
                    />
                    Escribenos
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
