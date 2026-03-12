// BOTÓN SIGUIENTE HACIA TARJETAS
const btnSiguiente = document.getElementById("siguiente-pago");

if (btnSiguiente) {
  btnSiguiente.addEventListener("click", (e) => {
    e.preventDefault();

    const campos = document.querySelectorAll(
      "input[required], select[required], textarea[required]"
    );
    let incompleto = false;

    campos.forEach((campo) => {
      if (!campo.value.trim()) {
        campo.style.transition = "0.3s ease";
        campo.style.boxShadow = "0 0 0 5px rgba(255, 119, 173, 0.4)";
        incompleto = true;
      } else {
        campo.style.boxShadow = "0 0 0 5px rgba(255, 119, 173, 0)";
      }
    });

    if (incompleto) {
      alert(
        "Por favor, completá todos los campos requeridos antes de continuar."
      );
      return;
    }

    // Si todo está completo, continuar normalmente
    const carritoParaFacturacion =
      JSON.parse(localStorage.getItem("carritoParaFacturacion")) || [];

    localStorage.setItem(
      "pedidoParaTarjeta",
      JSON.stringify(carritoParaFacturacion)
    );

    window.location.href = "tarjeta-ro.html";
  });
}
