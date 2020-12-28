function mostrarError(mensaje) {
  // Muesta mensaje de error en HTML
  const alerta = document.querySelector(".bg-red-100");

  if (!alerta) {
    // Crea div para mostrar mensaje en HTML
    const container = document.querySelector(".container");
    const div = document.createElement("div");

    // Agrega clases al div del mensaje
    div.classList.add(
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "max-w-md",
      "mx-auto",
      "mt-6",
      "text-center"
    );

    // Agrega texto del mensaje al div
    div.innerHTML = `
      <strong class="font-bold">Error!</strong>
      <span class="block">${mensaje}</span>
    `;

    // Agrega div de mensaje en el HTML
    container.appendChild(div);

    // Elimina el div con mensaje despues de 2.5 segs
    setTimeout(() => {
      div.remove();
    }, 2500);
  }
}

export default mostrarError;
