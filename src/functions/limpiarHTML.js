function limpiarHTML() {
  // Limpia resultado de clima
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

export default limpiarHTML;
