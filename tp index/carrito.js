let total = 0;
let contador = 0;

// Referencias al DOM
const modalll = document.getElementById("modalll");
const OpenModalll = document.getElementById("OpenModalll");
const CloseModalll = document.getElementById("CloseModalll");
const listaCarrito = document.getElementById("lista-carrito");
const totalElemento = document.getElementById("total");
const contadorElemento = document.getElementById("contador-carrito");

// Manejo del modal carrito
OpenModalll.onclick = () => {
  modalll.style.visibility = "visible";
  document.body.style.overflow = "hidden";
};
CloseModalll.onclick = () => {
  modalll.style.visibility = "hidden";
  document.body.style.overflow = "";
};

function agregarAlCarrito(nombre, precio, imagenSrc) {
  contador++;
  total += precio;
  const item = document.createElement("li");
  item.classList.add("item-carrito"); // Aplicamos el estilo flex

  item.innerHTML = `
  <img src="${imagenSrc}" alt="${nombre}" style="width:50px; margin-right:8px;">
  ${nombre} — $${precio.toLocaleString("es-AR")}
  <i class="fas fa-trash eliminar" onclick="eliminarDelCarrito(this, ${precio})"></i>
`;
  listaCarrito.appendChild(item);
  contadorElemento.textContent = contador;
  totalElemento.textContent = total;
  contadorElemento.style.display = "inline";
}

/*
function agregarAlCarrito(nombre, precio) {
  contador++;
  total += precio;

  const item = document.createElement("li");
  item.innerHTML = `${nombre} - $${precio} <i class='fas fa-trash eliminar' onclick='eliminarDelCarrito(this, ${precio})'></i>`;
  listaCarrito.appendChild(item);

  contadorElemento.textContent = contador;
  totalElemento.textContent = total;
  contadorElemento.style.display = "inline";

  const item = document.createElement("li");
  item.innerHTML = `
    <img src="${imagenSrc}" alt="${nombre}" style="width:50px; margin-right:8px;">
    ${nombre} — $${precio.toLocaleString("es‑AR")}
    <i class="fas fa-trash eliminar" onclick="eliminarDelCarrito(this, ${precio})"></i>
  `;
}*/

function eliminarDelCarrito(elemento, precio) {
  const item = elemento.parentElement;
  listaCarrito.removeChild(item);
  contador--;
  total -= precio;
  totalElemento.textContent = total;
  contadorElemento.textContent = contador;
  if (contador === 0) {
    contadorElemento.style.display = "none";
  }
}

/*
document.querySelector(".contenedor").addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-agregar")) {
    const card = e.target.closest(".card");
    const nombre = card.querySelector("h5").textContent;
    const precioText = card.querySelector("p").textContent;
    const precio = parseFloat(precioText.replace(/[^0-9.-]/g, ""));
    const imagenSrc = card.querySelector("img").src;
    agregarAlCarrito(nombre, precio, imagenSrc);
  }
});*/

document.querySelector(".contenedor").addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const card = e.target.closest(".card");
    const nombre = card.querySelector("h5").textContent;
    const precioTexto = card.querySelector("p").textContent;
    const precio = parsearPrecio(precioTexto);
    const imagenSrc = card.querySelector("img").src;
    agregarAlCarrito(nombre, precio, imagenSrc);
  }
});

function parsearPrecio(precioTexto) {
  // Quita todo lo que no sea dígito, punto o coma
  let txt = precioTexto.replace(/[^0-9\.,]/g, "");
  // Si tiene punto y coma, asumimos formato de miles y decimal
  if (txt.includes(".") && txt.includes(",")) {
    txt = txt.replace(/\./g, "").replace(",", ".");
  } else {
    // Sino, convertimos comas por puntos
    txt = txt.replace(",", ".");
  }
  return parseFloat(txt);
}

document.getElementById("btn-ver-mas").addEventListener("change", function () {
  document.querySelector(".extra").classList.toggle("oculto", !this.checked);
});
