import kelvinACentigrados from "../helpers/kelvinACentigrados";

function mostrarClima(datos) {
  // Mustra los datos del clima segun el formulario
  const resultado = document.getElementById("resultado");

  const {
    name,
    main: { temp, temp_max, temp_min },
  } = datos;

  const centigrados = kelvinACentigrados(temp);
  const max = kelvinACentigrados(temp_max);
  const min = kelvinACentigrados(temp_min);

  const nombreCiudad = document.createElement("p");
  nombreCiudad.textContent = `Clima en ${name}`;
  nombreCiudad.classList.add("font-bold", "text-2xl");

  const actual = document.createElement("p");
  actual.innerHTML = `${centigrados} &#8451;`;
  actual.classList.add("font-bold", "text-6xl");

  const tempMin = document.createElement("p");
  tempMin.innerHTML = `Temperatura min: ${min} &#8451;`;
  actual.classList.add("text-xl");

  const tempMax = document.createElement("p");
  tempMax.innerHTML = `Tmperatura max: ${max} &#8451;`;
  tempMax.classList.add("text-xl");

  const div = document.createElement("div");
  div.classList.add("text-center", "text-white");
  div.appendChild(nombreCiudad);
  div.appendChild(actual);
  div.appendChild(tempMax);
  div.appendChild(tempMin);

  resultado.appendChild(div);
}

export default mostrarClima;
