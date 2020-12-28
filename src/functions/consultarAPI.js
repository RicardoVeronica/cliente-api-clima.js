import limpiarHTML from "./limpiarHTML";
import mostrarError from "./mostrarError";
import mostrarClima from "./mostrarClima";
import mostrarSpinner from "./mostrarSpinner";

function consultarAPI(ciudad, pais) {
  // Consulta la API para regresar resultado
  const apiKey = "90c51111fe00e6f724b8e1310ca79d96";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`;

  mostrarSpinner();

  fetch(url)
    .then((result) => result.json())
    .then((datos) => {
      limpiarHTML();
      if (datos.cod === "404") mostrarError("Ciudad no encontrada");
      mostrarClima(datos);
    });
}

export default consultarAPI;
