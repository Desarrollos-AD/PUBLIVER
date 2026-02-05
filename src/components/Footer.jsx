import { Link } from "react-router-dom";

function Footer() {
  return (
    <div id="contacto" className="py-5 text-center">
      <p className="mb-0 text-secondary fs--1 fw-medium">
        Todos los derechos reservados Publiver
      </p>

      <p>
        Consulta nuestros {" "}
        <Link to="/terminos" className="text-primario hover:underline">
          Términos y Aviso legal
        </Link>
      </p>
    </div>
  );
}

export default Footer;
