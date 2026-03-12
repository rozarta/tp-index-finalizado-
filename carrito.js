let cart = JSON.parse(localStorage.getItem("carrito")) || []; // Carga el carrito desde localStorage o crea un array vacío si no existe

// Referencias al DOM
const modalll = document.getElementById("modalll"); // Obtiene el elemento del modal del carrito
const OpenModalll = document.getElementById("OpenModalll"); // Botón para abrir el modal
const CloseModalll = document.getElementById("CloseModalll"); // Botón para cerrar el modal
const listaCarrito = document.getElementById("lista-carrito"); // Contenedor (ul) donde se listan los productos del carrito
const totalElemento = document.getElementById("total"); // Elemento donde se muestra el total
const contadorElemento = document.getElementById("contador-carrito"); // Elemento que muestra la cantidad total de items
/**/
// Rellenos disponibles según cada producto
const rellenosPorProducto = {
  "Tarta Tofi": [
    "Dulce de leche repostero",
    "chocolate",
    "Nutella",
    "nueces",
    "almendras",
    "maní",
    "masa sablée",
    "masa quebrada",
  ],
  "Torta Frutilla": [
    "Dulce de leche repostero",
    "Crema chantilly",

    "crema con cereza",
    "crema con durazno",
    "crema con frutilla",
    "bizcochuelo chocolate",
    "bizcochuelo vainilla",
  ],
  "Torta Chocolate": [
    "Dulce de leche repostero",
    "Crema chantilly de chocolate",
    "crema con cereza",
    "crema con durazno",
    "crema con frutilla",

    "bizcochuelo chocolate",
    "bizcochuelo vainilla",
  ],
  "Torta Lamina": [
    "Dulce de leche repostero",
    "Crema de avellanas",
    "crema chantilly",
    "crema con cereza",
    "crema con durazno",
    "crema con frutilla",
    "bizcochuelo chocolate",
    "bizcochuelo vainilla",
  ],
  "Torta Oreo": [
    "Dulce de leche repostero",
    "crema chantilly",
    "Crema de avellanas",
    "crema con cereza",
    "crema con durazno",
    "crema con frutilla",
    "bizcochuelo chocolate",
    "bizcochuelo vainilla",
  ],
  "Tarta Membrillo": ["ralladura de coco", "masa sablée", "masa quebrada"],
  "Torta Lamina": [
    "Dulce de leche repostero",
    "crema chantilly",
    "Crema de avellanas",
    "crema con cereza",
    "crema con durazno",
    "crema con frutilla",
    "bizcochuelo chocolate",
    "bizcochuelo vainilla",
  ],
  "Tarta Frutilla": [
    "Crema chantilly",
    "Crema de avellanas",
    "masa sablée",
    "masa quebrada",
  ],
  "Tarta Lemon Pie": [
    "merengue italiano",
    "merengue suizo",
    "ralladura de limón",
    "rodajas finas de limón",
    "masa sablée",
    "masa quebrada",
  ],
  "Tarta Frutal": [
    "Crema chantilly",
    "Crema de avellanas",
    "kiwi",
    "durazno",
    "frutillas",
    "arándanos",
    "uvas",
    "masa sablée",
    "masa quebrada",
  ],
  "Tarta de Frutilla": [
    "Crema chantilly",
    "Crema de avellanas",
    "gelatina transparente",
    "masa sablée",
    "masa quebrada",
  ],
  "Torta Moka": [
    "Crema moka con Crema chantilly",
    "Crema moka con crema manteca con café y azúcar",
    "Dulce de leche repostero",
    "nueces",
    "almendras",
    "bizcochuelo chocolate",
    "bizcochuelo vainilla",
  ],
  "Tarta Ricota": [
    "esencia de vainilla",
    "Pasas de uva remojadas en ron",
    "Pasas de uva remojadas en licor",
    "Ralladura de limón",
    "Ralladura de naranja",
    "masa sablée",
    "masa quebrada",
  ],
  Chocotorta: ["Cacao en polvo", "virutas de chocolate"],
};
// Rellenos predeterminados según el producto
const rellenosPredeterminadosPorProducto = {
  "Tarta Tofi": ["Dulce de leche repostero", "masa sablée", "nueces"],
  "Torta Frutilla": [
    "Dulce de leche repostero",
    "crema chantilly",

    "bizcochuelo vainilla",
  ],
  "Torta Chocolate": [
    "Dulce de leche repostero",
    "Crema chantilly de chocolate",
    "bizcochuelo vainilla",
  ],
  "Torta Lamina": ["Dulce de leche repostero", "bizcochuelo vainilla"],
  "Torta Oreo": [
    "crema chantilly",
    "Dulce de leche repostero",
    "bizcochuelo vainilla",
  ],
  "Tarta Membrillo": ["ralladura de coco", "masa sablée"],
  "Torta Lamina": [
    "dulce de leche repostero",
    "crema chantilly",
    "bizcochuelo vainilla",
  ],
  "Tarta Frutilla": ["crema chantilly", "Gelatina transparente", "masa sablée"],
  "Tarta Lemon Pie": ["ralladura de limón", "merengue italiano", "masa sablée"],
  "Tarta Frutal": [
    "masa sablée",
    "crema chantilly",
    "kiwi",
    "durazno",
    "frutillas",
  ],
  "Tarta de Frutilla": [
    "masa sablée",
    "crema chantilly",
    "gelatina transparente",
  ],
  "Torta Moka": [
    "Crema moka con Crema chantilly",
    "Dulce de leche repostero",
    "bizcochuelo vainilla",
    "almendras",
  ],
  "Tarta Ricota": ["masa sablée", "Ralladura de limón", "esencia de vainilla"],
  Chocotorta: ["Cacao en polvo", "virutas de chocolate"],
};
// ----------------- GRUPOS DE RELLENOS (para limitar selección) -----------------
const gruposRellenos = {
  grupoCremas_Dulces: ["chocolate", "nutella", "dulce de leche repostero"],
  grupoCremas: [
    "crema chantilly",
    "crema con cereza",
    "crema con durazno",
    "crema con frutilla",
    "crema de avellanas",
    "Crema chantilly de chocolate",
    "Crema moka con Crema chantilly",
    "Crema moka con crema manteca con café y azúcar",
  ],
  grupoMerengue: ["merengue italiano", "merengue suizo"],
  grupoCoberturas_Frutales: ["gelatina transparente"],
  grupoDecoracion: [
    "ralladura de limón",
    "ralladura de naranja",
    "rodajas finas de limón",
    "ralladura de coco",
  ],

  grupoPasas: [
    "Pasas de uva remojadas en ron",
    "Pasas de uva remojadas en licor",
  ],
  grupoFrutas: ["kiwi", "durazno", "frutillas", "arándanos", "uvas"],
  grupoCrocantes: ["nueces", "almendras", "maní"],
  grupoMasa: ["masa sablée", "masa quebrada"],
  grupoBizcochuelo: ["bizcochuelo vainilla", "bizcochuelo chocolate"],
};
const rellenosNoEliminables = [
  "bizcochuelo vainilla",
  "bizcochuelo chocolate",
  "masa sablée",
  "masa quebrada",
  "crema chantilly",
  "crema de avellanas",
  "crema con cereza",
  "crema con durazno",
  "crema con frutilla",
  "Crema chantilly de chocolate",
  "Dulce de leche repostero",
  "gelatina transparente",
];
const gruposOpcionales = ["grupoCrocantes", "grupoDecoracion", "grupoPasas"];
/**/

// Abrir y cerrar modal del carrito
if (OpenModalll && modalll) {
  // Si existen el botón y el modal
  OpenModalll.onclick = () => {
    // Asigna la acción de click para abrir el modal
    modalll.style.visibility = "visible"; // Hace visible el modal
    document.body.style.overflow = "hidden"; // Evita que la página principal haga scroll mientras el modal está abierto
  };
}
if (CloseModalll && modalll) {
  // Si existen el botón de cerrar y el modal
  CloseModalll.onclick = () => {
    // Asigna la acción de click para cerrar el modal
    modalll.style.visibility = "hidden"; // Oculta el modal
    document.body.style.overflow = ""; // Recupera el scroll de la página
  };
}

function renderCarrito() {
  if (!listaCarrito) return; // Si no existe el contenedor del carrito, no hace nada
  listaCarrito.innerHTML = "";
  let total = 0;

  cart.forEach((prod, index) => {
    //Recorre cada producto del carrito
    total += prod.precio * prod.cantidad; // Suma al total el precio por la cantidad

    //  Aseguramos que siempre haya un array de rellenos
    if (!Array.isArray(prod.rellenos)) prod.rellenos = [];

    const item = document.createElement("li");
    item.classList.add("item-carrito");

    item.innerHTML = ` 
      <div class="carrito-detalle">
        <img src="${prod.imagen}" alt="${prod.nombre}" class="carrito-img">
        <div class="carrito-info">
          <div class="carrito-header">
            <p class="nombre">${prod.nombre}</p>
            <i class="fas fa-trash eliminar" onclick="eliminarDelCarrito(${index})"></i>
          </div>
          <p class="precio">$${prod.precio.toLocaleString("es-AR")}</p>

          <div class="cantidad-control">
            <label>Cant:</label>
            <input 
              type="number" 
              min="1" 
              value="${prod.cantidad}" 
              onchange="actualizarCantidad(${index}, this.value)">
          </div>

          <div class="rellenos-checks">
            <p class="rellenos-titulo">Rellenos:</p>
            ${
              prod.rellenos.length > 0
                ? prod.rellenos
                    .map(
                      (r, i) => `
                      <label class="relleno-item">
                        <input type="checkbox" class="check-compra" checked 
                          onchange="toggleRelleno(${index}, ${i}, this.checked)">
                        ${r}
                      </label>`
                    )
                    .join("")
                : "<p class='sin-rellenos'>(Sin rellenos)</p>"
            }
          </div>
        </div>
      </div>
      <hr class="separador">
    `; //Carga el contenido HTML del producto en el carrito

    listaCarrito.appendChild(item);
  });

  if (totalElemento) totalElemento.textContent = total.toLocaleString("es-AR"); //Muestra el total formateado

  if (contadorElemento) {
    const totalItems = cart.reduce((acc, prod) => acc + prod.cantidad, 0);
    contadorElemento.textContent = totalItems;
    contadorElemento.style.display = totalItems > 0 ? "inline" : "none";
  }
}
// Mostrar el carrito al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  renderCarrito();
});

// Agregar producto al carrito
function agregarAlCarrito(
  nombre,
  precio,
  imagenSrc,
  cantidad = 1,
  rellenos = []
) {
  // Función para añadir un producto al array cart (recibe rellenos opcionales)
  const existente = cart.find((p) => p.nombre === nombre); // Busca si ya existe un producto con el mismo nombre
  if (existente) {
    existente.cantidad += cantidad; // Si existe, suma la cantidad
    existente.rellenos = rellenos; // Actualiza los rellenos (sobrescribe)
  } else {
    cart.push({ nombre, precio, imagen: imagenSrc, cantidad, rellenos }); // Si no existe, lo agrega como nuevo objeto
  }
  localStorage.setItem("carrito", JSON.stringify(cart)); // Guarda el carrito actualizado en localStorage
  renderCarrito(); // Vuelve a renderizar la vista del carrito
}

// Eliminar producto
function eliminarDelCarrito(index) {
  // Función que elimina un producto por su índice
  cart.splice(index, 1); // Quita el elemento del array
  localStorage.setItem("carrito", JSON.stringify(cart)); // Actualiza el localStorage
  renderCarrito(); // Re-renderiza el carrito
}
/** */
function toggleRelleno(indexProducto, indexRelleno, checked) {
  const valor = cart[indexProducto].rellenos[indexRelleno].toLowerCase();

  //  Si es un relleno obligatorio → NO se puede eliminar
  if (
    !checked &&
    rellenosNoEliminables.some((r) => valor.includes(r.toLowerCase()))
  ) {
    alert("Este relleno es obligatorio y no se puede quitar.");
    renderCarrito(); // vuelve a dejarlo marcado visualmente
    return;
  }

  //  Si NO es obligatorio y se desmarca, sí se elimina
  if (!checked) {
    cart[indexProducto].rellenos.splice(indexRelleno, 1);
  }

  localStorage.setItem("carrito", JSON.stringify(cart));
  renderCarrito();
}
function cargarRellenos(nombreProducto, listaRellenos) {
  listaRellenos.innerHTML = "";

  const rellenosDisponibles = rellenosPorProducto[nombreProducto] || [];
  const gruposUI = {};

  // Crear grupos
  for (const [nombreGrupo, rellenosGrupo] of Object.entries(gruposRellenos)) {
    const rellenosDelGrupo = rellenosDisponibles.filter((r) =>
      rellenosGrupo.some((g) => g.toLowerCase() === r.toLowerCase())
    );

    if (rellenosDelGrupo.length === 0) continue;

    const titulo = document.createElement("button");
    titulo.classList.add("grupo-acordeon-titulo");
    titulo.textContent = nombreGrupo.replace("grupo", "");

    const cont = document.createElement("div");
    cont.classList.add("grupo-acordeon-contenido");

    if (gruposOpcionales.includes(nombreGrupo)) {
      const opcionNinguno = document.createElement("label");
      opcionNinguno.classList.add("relleno-item");
      opcionNinguno.innerHTML = `
        <input type="radio" name="${nombreGrupo}" value="Ninguno">
        Ninguno
      `;
      cont.appendChild(opcionNinguno);
    }

    gruposUI[nombreGrupo] = { titulo, cont };
  }

  // Agregar rellenos a su grupo
  rellenosDisponibles.forEach((relleno) => {
    const lower = relleno.toLowerCase();
    let grupo = "";

    for (const [nombreGrupo, rellenosGrupo] of Object.entries(gruposRellenos)) {
      if (rellenosGrupo.some((r) => r.toLowerCase() === lower)) {
        grupo = nombreGrupo;
        break;
      }
    }

    let tipo = grupo ? "radio" : "checkbox";

    //  frutas siempre checkbox
    if (grupo === "grupoFrutas") tipo = "checkbox";

    const label = document.createElement("label");
    label.classList.add("relleno-item");
    label.innerHTML = `
      <input type="${tipo}" name="${grupo}" value="${relleno}">
      ${relleno}
    `;

    if (grupo && gruposUI[grupo]) {
      gruposUI[grupo].cont.appendChild(label);
    } else {
      listaRellenos.appendChild(label);
    }
  });

  // Insertar grupos al DOM
  for (const obj of Object.values(gruposUI)) {
    if (obj.cont.childElementCount > 0) {
      listaRellenos.appendChild(obj.titulo);
      listaRellenos.appendChild(obj.cont);

      obj.titulo.addEventListener("click", () => {
        obj.cont.classList.toggle("mostrar");
      });
    }
  }
}

// Mar

// ----------------- POPUP DE OPCIONES (Index) -----------------
// ----------------- POPUP DE OPCIONES (Index) -----------------
let selectedProduct = null; // Variable para guardar temporalmente el producto seleccionado en el popup

const contenedor = document.querySelector(".contenedor");
if (contenedor) {
  contenedor.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const card = e.target.closest(".card");
      const nombre = card.querySelector("h5").textContent;
      const precioTexto = card.querySelector("p").textContent;
      const precio = parsearPrecio(precioTexto);
      const imagenSrc = card.querySelector("img").src;

      selectedProduct = { nombre, precio, imagen: imagenSrc };

      document.getElementById("customProductName").textContent = nombre;
      document.getElementById("cantidad").value = 1;

      // Limpiar lista de rellenos
      const listaRellenos = document.querySelector(".rellenos-lista");
      listaRellenos.innerHTML = "";

      const rellenosDisponibles = rellenosPorProducto[nombre] || [];

      // Crear interfaz por grupos SOLO si el producto usa ese grupo
      const gruposUI = {};

      for (const [nombreGrupo, rellenosGrupo] of Object.entries(
        gruposRellenos
      )) {
        // comprobar si el producto tiene algún relleno de este grupo
        const rellenosDelGrupo = rellenosDisponibles.filter((r) =>
          rellenosGrupo.some((g) => g.toLowerCase() === r.toLowerCase())
        );

        if (rellenosDelGrupo.length === 0) continue; // no mostrar grupo vacío

        // crear título + contenedor del acordeón
        const titulo = document.createElement("button");
        titulo.classList.add("grupo-acordeon-titulo");
        titulo.textContent = nombreGrupo.replace("grupo", "");

        const cont = document.createElement("div");
        cont.classList.add("grupo-acordeon-contenido");

        // si es grupo opcional, agregar opción "Ninguno" (radio)
        if (gruposOpcionales.includes(nombreGrupo)) {
          const opcionNinguno = document.createElement("label");
          opcionNinguno.classList.add("relleno-item");
          opcionNinguno.innerHTML = `
            <input type="radio" name="${nombreGrupo}" value="Ninguno">
            Ninguno
          `;
          cont.appendChild(opcionNinguno);
        }

        gruposUI[nombreGrupo] = { titulo, cont };
      }

      // Agregar los rellenos dentro de su grupo (o sueltos si no pertenecen a grupo)
      rellenosDisponibles.forEach((relleno) => {
        const lower = relleno.toLowerCase();
        let grupo = "";

        for (const [nombreGrupo, rellenosGrupo] of Object.entries(
          gruposRellenos
        )) {
          if (rellenosGrupo.some((r) => r.toLowerCase() === lower)) {
            grupo = nombreGrupo;
            break;
          }
        }

        let tipo = grupo ? "radio" : "checkbox";

        //  Las frutas SIEMPRE serán checkbox, aunque tengan grupo
        if (grupo === "grupoFrutas") {
          tipo = "checkbox";
        }

        const label = document.createElement("label");
        label.classList.add("relleno-item");
        label.innerHTML = `
          <input type="${tipo}" name="${grupo}" value="${relleno}">
          ${relleno}
        `;

        if (grupo && gruposUI[grupo]) {
          gruposUI[grupo].cont.appendChild(label);
        } else {
          listaRellenos.appendChild(label);
        }
      });

      // Agregar acordeones al DOM solo si tienen contenido (incluye "Ninguno" si corresponde)
      for (const [nombreGrupo, obj] of Object.entries(gruposUI)) {
        // si el contenedor tiene al menos 1 elemento (Ninguno o relleno)
        if (obj.cont.childElementCount > 0) {
          listaRellenos.appendChild(obj.titulo);
          listaRellenos.appendChild(obj.cont);

          obj.titulo.addEventListener("click", () => {
            obj.cont.classList.toggle("mostrar");
          });
        }
      }

      //  Marcar rellenos predeterminados del producto actual
      const rellenosPredeterminados =
        rellenosPredeterminadosPorProducto[nombre] || [];

      document.querySelectorAll(".rellenos-lista input").forEach((chk) => {
        const valor = chk.value.toLowerCase();

        // marcar si está en predeterminados (coincidencia exacta)
        if (rellenosPredeterminados.some((r) => valor === r.toLowerCase())) {
          chk.checked = true;

          // si es de un grupo opcional, desmarcar la opción "Ninguno" si existiera
          if (chk.name && gruposOpcionales.includes(chk.name)) {
            const ninguno = document.querySelector(
              `input[name="${chk.name}"][value="Ninguno"]`
            );
            if (ninguno) ninguno.checked = false;
          }
        }
      });

      // Para cada grupo opcional: si NO hay ninguna opción marcada, marcar "Ninguno"
      Object.keys(gruposUI).forEach((gName) => {
        if (!gruposOpcionales.includes(gName)) return;
        const anyChecked = !!document.querySelector(
          `.rellenos-lista input[name="${gName}"]:checked`
        );
        if (!anyChecked) {
          const ninguno = document.querySelector(
            `input[name="${gName}"][value="Ninguno"]`
          );
          if (ninguno) ninguno.checked = true;
        }
      });

      //  Mostrar el popup
      document.getElementById("customModal").style.display = "flex";
    }
  });
}

// Cerrar popup con la X
const closePopupBtn = document.getElementById("closeCustomModal"); // Botón X del modal de producto
if (closePopupBtn) {
  closePopupBtn.onclick = () => {
    document.getElementById("customModal").style.display = "none"; // Oculta el modal al hacer click en la X
  };
}

// Confirmar producto desde el popup
const confirmarBtn = document.getElementById("confirmarProducto"); // Botón "Agregar al carrito" dentro del popup
if (confirmarBtn) {
  confirmarBtn.onclick = () => {
    if (!selectedProduct) return; // Si no hay producto seleccionado, no hace nada

    const tamano = document.getElementById("tamano").value; // Lee el tamaño elegido
    const cantidad = parseInt(document.getElementById("cantidad").value) || 1; // Lee la cantidad elegida y la normaliza a número

    // Rellenos seleccionados
    let rellenos = Array.from(
      document.querySelectorAll(".rellenos-lista input:checked")
    )
      .map((r) => r.value)
      .filter((r) => r !== "Ninguno"); //  Si eligen "Ninguno", NO se agrega al carrito

    // Nombre final con tamaño (sin mostrar rellenos en el carrito)
    const nombreFinal = `${selectedProduct.nombre} (${tamano})`; // Construye el nombre final que se guardará

    // Agregar al carrito
    agregarAlCarrito(
      nombreFinal,
      selectedProduct.precio,
      selectedProduct.imagen,
      cantidad,
      rellenos
    );

    // Cerrar modal
    document.getElementById("customModal").style.display = "none"; // Oculta el modal tras confirmar
  };
}
//  Cargar rellenos en la tarjeta individual
const listaRellenosTarjeta = document.querySelector(".rellenos-lista");
if (listaRellenosTarjeta) {
  const nombreTarjeta = document.getElementById("titulo").textContent;
  cargarRellenos(nombreTarjeta, listaRellenosTarjeta);
}
function cargarRellenosTarjeta(nombreProducto) {
  const lista = document.querySelector(".rellenos-lista");
  if (!lista) return;

  lista.innerHTML = "";

  const rellenosDisponibles = rellenosPorProducto[nombreProducto] || [];
  const predeterminados =
    rellenosPredeterminadosPorProducto[nombreProducto] || [];

  // Crear grupos
  const gruposUI = {};

  for (const [nombreGrupo] of Object.entries(gruposRellenos)) {
    const delGrupo = rellenosDisponibles.filter((r) =>
      gruposRellenos[nombreGrupo].some(
        (g) => g.toLowerCase() === r.toLowerCase()
      )
    );

    if (delGrupo.length === 0) continue;

    gruposUI[nombreGrupo] = {
      titulo: document.createElement("button"),
      contenedor: document.createElement("div"),
    };

    gruposUI[nombreGrupo].titulo.classList.add("grupo-acordeon-titulo");
    gruposUI[nombreGrupo].titulo.textContent = nombreGrupo.replace("grupo", "");

    gruposUI[nombreGrupo].contenedor.classList.add("grupo-acordeon-contenido");

    // Si es opcional → agregamos NINGUNO
    if (gruposOpcionales.includes(nombreGrupo)) {
      const opcionNinguno = document.createElement("label");
      opcionNinguno.classList.add("relleno-item");
      opcionNinguno.innerHTML = `
        <input type="radio" name="${nombreGrupo}" value="Ninguno">
        Ninguno
      `;
      gruposUI[nombreGrupo].contenedor.appendChild(opcionNinguno);
    }
  }

  // Agregar los rellenos a sus grupos
  rellenosDisponibles.forEach((relleno) => {
    const lower = relleno.toLowerCase();
    let grupo = "";

    for (const [nombreGrupo, listaGrupo] of Object.entries(gruposRellenos)) {
      if (listaGrupo.some((r) => r.toLowerCase() === lower)) {
        grupo = nombreGrupo;
        break;
      }
    }

    const tipo = grupo ? "radio" : "checkbox";

    const label = document.createElement("label");
    label.classList.add("relleno-item");
    label.innerHTML = `
      <input type="${tipo}" name="${grupo}" value="${relleno}">
      ${relleno}
    `;

    if (grupo && gruposUI[grupo]) {
      gruposUI[grupo].contenedor.appendChild(label);
    } else {
      lista.appendChild(label);
    }
  });

  // Agregar UI al HTML
  for (const obj of Object.values(gruposUI)) {
    if (obj.contenedor.childElementCount > 0) {
      lista.appendChild(obj.titulo);
      lista.appendChild(obj.contenedor);
      obj.titulo.addEventListener("click", () => {
        obj.contenedor.classList.toggle("mostrar");
      });
    }
  }

  //  Marcar predeterminados DESPUÉS de que el DOM se actualice
  setTimeout(() => {
    document.querySelectorAll(".rellenos-lista input").forEach((chk) => {
      if (
        predeterminados.some((r) => chk.value.toLowerCase() === r.toLowerCase())
      ) {
        chk.checked = true;

        if (gruposOpcionales.includes(chk.name)) {
          const ninguno = document.querySelector(
            `input[name="${chk.name}"][value="Ninguno"]`
          );
          if (ninguno) ninguno.checked = false;
        }
      }
    });
  }, 50);
}

// ----------------- TARJETA INDIVIDUAL -----------------
const btnTarjeta = document.querySelector(".btn"); // Botón "Agregar al carrito" en la página de producto individual
if (btnTarjeta) {
  btnTarjeta.addEventListener("click", () => {
    // Al hacer click en ese botón
    const nombre = document.getElementById("titulo").textContent; // Toma el nombre del producto en la tarjeta
    const precioTexto = document.getElementById("precio").textContent; // Toma el texto del precio
    const precio = parsearPrecio(precioTexto); // Convierte el precio a número
    const imagenSrc = document.getElementById("main-image").src; // Obtiene la imagen principal
    const cantidad = parseInt(document.getElementById("cantidad").value) || 1; // Lee la cantidad

    const tamanoTexto = document.getElementById("tamano").value; // Lee el texto del tamaño (ej. "Grande (...)")
    const tamano = tamanoTexto.split(" ")[0]; // Extrae la primera palabra (ej. "Grande")

    //  Capturamos rellenos seleccionados
    let rellenos = Array.from(
      document.querySelectorAll(".rellenos-lista input:checked")
    )
      .map((r) => r.value)
      .filter((r) => r !== "Ninguno"); //  Si eligen "Ninguno", NO se agrega al carrito

    const nombreFinal = `${nombre} (${tamano})`; // Construye el nombre final con tamaño

    agregarAlCarrito(nombreFinal, precio, imagenSrc, cantidad, rellenos); // Agrega el producto con rellenos al carrito
  });
}
// ----------------- TARJETAS RELACIONADAS (dentro de tarjeta.html) -----------------
const contenedorCartas = document.querySelector(" .cartas") || null; // Intenta seleccionar un contenedor de cartas relacionadas (si existe)
if (contenedorCartas) {
  contenedorCartas.addEventListener("click", (e) => {
    // Escucha clicks dentro de ese contenedor
    if (e.target.tagName === "BUTTON") {
      const card = e.target.closest(".cartas"); // Encuentra la carta clickeada
      const nombre = card.querySelector("h5").textContent; // Toma el nombre
      const precioTexto = card.querySelector("p").textContent; // Toma el precio en texto
      const precio = parsearPrecio(precioTexto); // Parseo a número
      const imagenSrc = card.querySelector("img").src; // Toma la imagen

      // Siempre arranca con cantidad = 1 y tamaño "Grande" por defecto
      const cantidad = 1; // Cantidad por defecto
      const tamano = "Grande"; // Tamaño por defecto

      // Nombre final
      const nombreFinal = `${nombre} (${tamano})`; // Construye nombre final

      agregarAlCarrito(nombreFinal, precio, imagenSrc, cantidad, rellenos);
    }
  });
}
// ----------------- TARJETAS RELACIONADAS (dentro de tarjeta.html) -----------------
const contenedoresRelacionados = document.querySelectorAll(
  ".opciones, .masopciones"
); // Selecciona contenedores extra relacionados
contenedoresRelacionados.forEach((contenedor) => {
  // Recorre cada contenedor y le agrega listener
  contenedor.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const card = e.target.closest(".cartas");
      if (!card) return;

      const nombre = card.querySelector("h5").textContent;
      const precioTexto = card.querySelector("p").textContent;
      const precio = parsearPrecio(precioTexto);
      const imagenSrc = card.querySelector("img").src;

      // Siempre arranca con cantidad = 1 y tamaño "Grande" por defecto
      const cantidad = 1;
      const tamano = "Grande";

      // Nombre final
      const nombreFinal = `${nombre} (${tamano})`;

      agregarAlCarrito(nombreFinal, precio, imagenSrc, cantidad, rellenos); // Agrega al carrito:
    }
  });
});

// ----------------- precio -----------------

function parsearPrecio(precioTexto) {
  // Función que toma un texto de precio y devuelve un número
  if (!precioTexto) return 0; // Si no hay texto, retorna 0
  let txt = precioTexto.toString().trim(); // Normaliza a string y quita espacios

  // Dejar solo dígitos, puntos y comas
  txt = txt.replace(/[^0-9.,]/g, ""); // Elimina caracteres que no sean números, punto o coma

  // Normalizar formato AR: quitar puntos de miles y pasar coma decimal a punto
  txt = txt.replace(/\./g, "").replace(",", "."); // Quita separador de miles y convierte coma decimal a punto

  const n = parseFloat(txt); // Convierte el string resultante a float
  return isNaN(n) ? 0 : n; // Si no es número, devuelve 0; sino devuelve el número
}

// ----------------- carga -----------------
document.addEventListener("DOMContentLoaded", renderCarrito); // Al cargar el DOM, renderiza el carrito

function actualizarCantidad(index, nuevaCantidad) {
  // Función llamada desde el input de cantidad para actualizar la cantidad
  nuevaCantidad = parseInt(nuevaCantidad); // Convierte la nueva cantidad a entero
  if (isNaN(nuevaCantidad) || nuevaCantidad < 1) return; // Valida que sea un entero >= 1
  cart[index].cantidad = nuevaCantidad; // Actualiza la cantidad en el array cart
  localStorage.setItem("carrito", JSON.stringify(cart)); // Guarda el carrito actualizado
  renderCarrito(); // Re-dibuja el carrito con la nueva cantidad
}
