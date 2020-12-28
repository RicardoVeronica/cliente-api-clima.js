import validarFormulario from "./validarFormulario";

function buscarClima() {
  // Inicia aplicacion
  const formulario = document.getElementById("formulario");

  formulario.addEventListener("click", (e) => {
    // Dispara validarFormulario con click en el boton submit
    if (e.target.matches("input[type='submit']")) {
      e.preventDefault();

      validarFormulario();
    }
  });
}

export default buscarClima;
