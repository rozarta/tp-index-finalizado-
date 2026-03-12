document.addEventListener("DOMContentLoaded", () => {
  const botonConfirmar = document.querySelector(".confirm-button");

  if (!botonConfirmar) return;

  botonConfirmar.addEventListener("click", (e) => {
    e.preventDefault();

    // Detectar el método de pago visible
    const formularioActivo = document.querySelector(
      ".payment-form[style*='block']"
    );
    if (!formularioActivo) {
      alert("Por favor, seleccioná un método de pago antes de continuar.");
      return;
    }

    const campos = formularioActivo.querySelectorAll("input[required]");
    let faltan = false;

    campos.forEach((input) => {
      if (!input.value.trim()) {
        input.style.transition = "0.3s ease";
        input.style.boxShadow = "0 0 0 5px rgba(255, 119, 173, 0.4)";
        faltan = true;
      } else {
        input.style.boxShadow = "0 0 0 5px rgba(255, 119, 173, 0)";
      }
    });

    if (faltan) {
      alert(
        "Completá todos los campos requeridos del método de pago seleccionado."
      );
      return;
    }

    // Cuando se confirme el pago
    window.localStorage.setItem(
      "pedidoFinalizado",
      localStorage.getItem("pedidoParaTarjeta")
    );

    // Si todo está correcto, avanzar
    window.location.href = "finalzacion-de-pago.html";
  });
});
