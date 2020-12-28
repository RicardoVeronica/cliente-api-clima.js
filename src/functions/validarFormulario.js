import mostrarError from "./mostrarError";
import consultarAPI from "./consultarAPI";

function validarFormulario() {
  // Valida los datos del formulario que escribe el usuario
  const ciudad = document.getElementById("ciudad").value;
  const pais = document.getElementById("pais").value;

  if (ciudad === "" || pais === "") {
    mostrarError("Ambos campos son obligatorios");
  }

  consultarAPI(ciudad, pais);
}

export default validarFormulario;
