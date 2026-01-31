import Header from "../components/Header";
import Servicios from "../components/Servicios";
import Nosotros from "../components/Nosotros";
import Eligenos from "../components/Eligenos";
import Contacto from "../components/Contacto";

function Inicio() {
  return (
    <>
      <Header />
      <Servicios />
      <Nosotros />
      <Eligenos />
      <Contacto />
    </>
  );
}

export default Inicio;
