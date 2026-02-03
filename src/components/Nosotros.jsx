import dest1 from "../assets/img/dest/dest1.jpg";
import dest2 from "../assets/img/dest/dest2.jpg";
import logo from "../assets/img/logo_compreto.png";
import "./Nosotros.css";
import Valores from "./Valores";

function Nosotros() {
  return (
    <section className="pt-5 nosotros " id="nosotros">
      <div className="container">
        <div className="quienes_somos">
          <h2>Nosotros</h2>
          <h3 className="fs-xl-10 fs-lg-8 fs-7 fw-bold text-capitalize text-center">
            ¿QUIÉNES SOMOS?
          </h3>
          <div className="quienes_somos--des">
            <p>
              Publiver Consultoría es una agencia especializada en publicidad,
              mercadotecnia, investigación de mercados y diseño gráfico,
              dedicada a impulsar el crecimiento y posicionamiento de las marcas
              en entornos altamente competitivos. Nuestro objetivo es fortalecer
              la identidad de marca y maximizar su impacto, desarrollando
              estrategias de comunicación efectivas que conecten con las
              audiencias a través de múltiples canales, tanto tradicionales como
              digitales. Trabajamos de la mano con empresas, marcas y
              organizaciones que buscan diferenciarse, comunicar con claridad y
              tomar decisiones estratégicas basadas en información real,
              análisis profundo y datos confiables. Cada proyecto es abordado de
              manera personalizada, integrando creatividad, investigación y
              estrategia para lograr resultados medibles y sostenibles.
            </p>
            <div className="quienes_somos__puntos--img">
              <img src={logo} alt="Logo publiver" loading="laxy" />
            </div>
          </div>

          <div className="quienes_somos__puntos">
            <div className="quienes_somos__puntos--info">
              <div className="card__pilares">
                <div className="card__pilares--pilar">
                  <h4>Enfoque estratégico</h4>
                  <p>
                    Diseñamos soluciones basadas en análisis de mercado,
                    objetivos comerciales y comportamiento del consumidor,
                    asegurando que cada acción tenga un propósito claro y
                    alineado a la marca.{" "}
                  </p>
                </div>

                <div className="card__pilares--pilar">
                  <h4>Experiencia en medios tradicionales y digitales</h4>
                  <p>
                    Enfoque estratégico Experiencia en medios tradicionales y
                    digitales Contamos con experiencia en campañas publicitarias
                    en radio, televisión, medios impresos, cine e internet,
                    logrando una comunicación coherente y efectiva en todos los
                    puntos de contacto.
                  </p>
                </div>

                <div className="card__pilares--pilar">
                  <h4>Soluciones integrales de principio a fin </h4>
                  <p>
                    Acompañamos a nuestros clientes desde la planeación
                    estratégica y la investigación, hasta la ejecución creativa,
                    difusión y evaluación de resultados, ofreciendo un servicio
                    completo y coordinado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="compromiso">
          <div className="mb-3 text-center">
            <h2>NUESTRO COMPROMISO </h2>
            <h3 className="fs-xl-10 fs-lg-8 fs-7 fw-bold text-capitalize">
              ES CONTIGO
            </h3>
          </div>

          <div className="contigo">
            <div className="contigo__conten1">
              <div className="">
                <img
                  className="contigo__conten1--img"
                  src={dest1}
                  alt="Rome, Italty"
                />
              </div>
              <div className="contigo__conten1--info">
                <p className="">
                  En un país donde la identidad, la cultura y la pasión forman
                  parte esencial de cada historia, creemos en el poder de las
                  marcas para comunicar con autenticidad y propósito. En
                  Publiver, ayudamos a las empresas a construir y contar
                  historias reales, coherentes y significativas, que conecten
                  emocionalmente con las personas, generen confianza y
                  fortalezcan relaciones a largo plazo. Nuestro enfoque combina
                  análisis, creatividad y estrategia para que cada mensaje
                  refleje los valores de la marca y tenga un impacto positivo y
                  duradero en su público.
                </p>
              </div>
            </div>

            <div className="contigo__conten2">
              <div className="">
                <img
                  className="contigo__conten2--img"
                  src={dest2}
                  alt="London, UK"
                />
              </div>
              <div className="contigo__conten2--info">
                <p className="">
                  Imaginamos un México donde cada empresa, sin importar su
                  tamaño o sector, tenga la oportunidad de destacar en un
                  mercado competitivo a través de una comunicación genuina y
                  bien estructurada. Visualizamos un entorno donde las marcas no
                  solo se vean, sino que se sientan y se recuerden. En Publiver,
                  aspiramos a ser el puente estratégico entre las marcas y las
                  emociones de sus clientes, transformando ideas en
                  experiencias, mensajes en conexiones reales y estrategias en
                  resultados que impulsen el crecimiento y la consolidación de
                  cada negocio.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="valores ">
          <h2 className="fs-xl-5 fs-lg-8 fs-5 fw-bold text-capitalize text-center">
            Sobre nosotros
          </h2>
          <div className="valores__mision">
            <div className="valores__mision--content">
              <h3>Misión</h3>
              <p>
                Brindar soluciones integrales de publicidad, mercadotecnia e
                investigación de mercados que impulsen el posicionamiento y
                crecimiento de las marcas, ayudando a nuestros clientes a tomar
                decisiones estratégicas mediante información confiable,
                creatividad efectiva y una comunicación clara orientada a
                resultados.
              </p>
            </div>
            <div className="valores__mision--img">
              <img src="/src/assets/img/logro.png" alt="Imagen Misión" />
            </div>
          </div>
          <div className="valores__vision">
            <div className="valores__vision--content">
              <h3>Visión</h3>
              <p>
                Ser la empresa líder en consultoría publicitaria y mercadotecnia
                en la región, reconocida por su capacidad de análisis,
                creatividad estratégica y efectividad en la ejecución,
                convirtiéndonos en el socio estratégico de marcas y
                organizaciones que buscan destacar, crecer y consolidarse en
                mercados competitivos.
              </p>
            </div>
            <div className="valores__vision--img">
              <img src="/src/assets/img/vision.png" alt="Imagen Visión" />
            </div>
          </div>
          <div className="valores__valores">
            <h3 className="fs-xl-5 fs-lg-8 fs-5 fw-bold text-capitalize text-center">
              Valores de PUBLIVER
            </h3>

            <Valores />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nosotros;
