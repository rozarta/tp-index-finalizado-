function changeMainImage(src) {
  document.getElementById("main-image").src = src;
}

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const productos = [
  {
    id: "1",
    titulo: "Tarta Tofi",
    descripcion:
      "Deliciosa base crocante rellena de dulce de leche y cubierta con un ganache de chocolate.",
    imagen: "Imagenes/tofi.jpeg",
    imagen1: "imagenes/tofi.jpeg",
    imagen2: "Imagenes/to2.jpg",
    imagen3: "Imagenes/to3.jpg",
    info: "5% de descuento pagando con Transferencia o depósito",
    precio: "$14.000",
  },
  {
    id: "2",
    titulo: "Torta Frutilla",
    descripcion:
      "Bizcochuelo suave con capas de crema chantilly y frutillas frescas. Clásica y refrescante.",
    imagen: "imagenes/torta frutilla.jpeg",
    imagen1: "imagenes/torta frutilla.jpeg",
    imagen2: "imagenes/fru2.jpg",
    imagen3: "imagenes/fru3 (2).jpg",
    info: "5% de descuento pagando con Transferencia o depósito",
    precio: "$20.000",
  },
  {
    id: "3",
    titulo: "Torta Chocolate",
    descripcion:
      "Bizcochuelo suave con capas de crema chantilly de chocolate y dulce de leche . Clásica y chocolatosa.",
    descripcion2: "Rinde de 10 a 12 porciones...",
    imagen: "Imagenes/torta chocolate.jpeg",
    imagen1: "Imagenes/torta chocolate.jpeg",
    imagen2: "Imagenes/choco2.jpg",
    imagen3: "Imagenes/choco3.jpg",
    info: "5% de descuento pagando con Transferencia o depósito",
    precio: "$20.000",
  },
  {
    id: "4",
    titulo: "Torta Lamina",
    descripcion:
      "Bizcochuelo tradicional con relleno a elección (dulce de leche, crema) y cobertura con una lamina a tu elección. Ideal para momentos especiales.",
    imagen: "Imagenes/torta-river.jpeg",
    imagen1: "Imagenes/torta-river.jpeg",
    imagen2: "Imagenes/ri2.jpg",
    imagen3: "Imagenes/ri3.jpg",
    info: "5% de descuento pagando con Transferencia o depósito",
    precio: "$22.000",
  },
  {
    id: "5",
    titulo: "Torta Oreo",
    descripcion:
      "Capas de crema y galletitas Oreo en un postre suave, dulce y crocante a la vez. Un éxito asegurado.",
    imagen: "Imagenes/torta oreo.jpeg",
    imagen1: "Imagenes/torta oreo.jpeg",
    imagen2: "Imagenes/oreo2.jpg",
    imagen3: "Imagenes/oreo3.jpg",
    info: "5% de descuento pagando con Transferencia o depósito",
    precio: "$24.000",
  },
  {
    id: "6",
    titulo: "Tarta Membrillo",
    descripcion:
      "Riquísima masa casera con un corazón de dulce de membrillo suave y perfumado. Casera de verdad.",
    imagen: "Imagenes/tartamembrillo.jpeg",
    imagen1: "Imagenes/tartamembrillo.jpeg",
    imagen2: "Imagenes/mem2.jpg",
    imagen3: "Imagenes/mem3.jpg",
    info: "5% de descuento pagando con Transferencia o depósito",
    precio: "$12.000",
  },
  {
    id: "7",
    titulo: "Torta Lamina",
    descripcion:
      "Bizcochuelo tradicional con relleno a elección (dulce de leche, crema) y cobertura con una lamina a tu elección. Ideal para momentos especiales.",
    imagen: "Imagenes/torta cerati.jpeg",
    imagen1: "Imagenes/torta cerati.jpeg",
    imagen2: "Imagenes/ce2.jpg",
    imagen3: "Imagenes/ce3.jpg",
    info: "5% de descuento pagando con Transferencia o depósito",
    precio: "$22.000",
  },
  {
    id: "8",
    titulo: "Tarta Frutilla",
    descripcion:
      "Base de masa crocante con crema chantilly y frutillas frescas por encima con gelatina. Fresca, dulce y colorida.",
    imagen: "Imagenes/tarta frutila.jpeg",
    imagen1: "Imagenes/tarta frutila.jpeg",
    imagen2: "Imagenes/frutilla2.jpg",
    imagen3: "Imagenes//frutilla3.jpg",
    info: "5% de descuento pagando con Transferencia o depósito",
    precio: "$15.000",
  },
  {
    id: "9",
    titulo: "Tarta Lemon Pie",
    descripcion:
      "Tarta con crema de limón, cubierta con un merengue dorado. Refrescante y elegante",
    imagen: "imagenes/lemonpie.jpeg",
    imagen1: "imagenes/lemonpie.jpeg",
    imagen2: "imagenes/le2.jpg",
    imagen3: "imagenes/le3.jpg",
    info: "5% de descuento pagando con Transferencia o depósito",
    precio: "$20.000",
  },
  {
    id: "10",
    titulo: "Tarta Frutal",
    descripcion:
      "Crema chantilly sobre masa crocante, con una selección de frutas frescas de estación. Llamativa y deliciosa.",
    imagen: "/Imagenes/Tarta frutal.jpeg",
    imagen1: "/Imagenes/Tarta frutal.jpeg",
    imagen2: "/Imagenes/frutal2.jpg",
    imagen3: "/Imagenes/frutal3.jpg",
    info: "5% de descuento pagando con Transferencia o depósito",
    precio: "$15.000",
  },
  {
    id: "11",
    titulo: "Tarta de Frutilla",
    descripcion:
      "Base de masa crocante con crema pastelera y frutillas frescas por encima. Fresca, dulce y colorida.",
    imagen: "imagenes/fruti1.jpg",
    imagen1: "imagenes/fruti1.jpg",
    imagen2: "imagenes/fruti2.jpg",
    imagen3: "imagenes/fruti3.jpg",
    info: "5% de descuento pagando con Transferencia o depósito",
    precio: "$16.000",
  },
  {
    id: "12",
    titulo: "Torta Moka",
    descripcion: "Descubre el Brownie Clásico...",
    descripcion2: "Rinde de 10 a 12 porciones...",
    imagen: "/Imagenes/moka.jpeg",
    imagen1: "/Imagenes/moka.jpeg",
    imagen2: "/Imagenes/moka2.jpg",
    imagen3: "/Imagenes/moka3.jpg",
    info: "5% de descuento pagando con Transferencia o depósito",
    precio: "$23.000",
  },
  {
    id: "13",
    titulo: "Tarta Ricota",
    descripcion:
      "Rellena de ricota cremosa con un toque de vainilla y limón. Tradicional y suave, ideal para acompañar con un café.",
    imagen: "/Imagenes/ricot.jpeg",
    imagen1: "/Imagenes/ricot.jpeg",
    imagen2: "/Imagenes/rico2.jpg",
    imagen3: "/Imagenes/rico3.jpg",
    info: "5% de descuento pagando con Transferencia o depósito",
    precio: "$12.000",
  },
  {
    id: "14",
    titulo: "Chocotorta",
    descripcion:
      "Postre frío hecho con galletitas de chocolate, dulce de leche y queso crema.",
    imagen: "/Imagenes/chocotorta.jpeg",
    imagen1: "/Imagenes/chocotorta.jpeg",
    imagen2: "/Imagenes/chocotorrta2.jpg",
    imagen3: "/Imagenes/chocotorta3.jpg",
    info: "5% de descuento pagando con Transferencia o depósito",
    precio: "$15.000",
  },
];

const producto = productos.find((p) => p.id === id);

if (producto) {
  document.getElementById("precio").textContent = producto.precio || "";
  document.getElementById("titulo").textContent = producto.titulo;
  document.getElementById("main-image").src = producto.imagen;
  document.getElementById("imagen1").src = producto.imagen1;
  document.getElementById("imagen2").src = producto.imagen2;
  document.getElementById("imagen3").src = producto.imagen3;

  document.getElementById("descripcion").textContent = producto.descripcion;
  document.getElementById("descripcion2").textContent =
    producto.descripcion2 || "";
  document.getElementById("info").textContent = producto.info || "";

  document.getElementById("imagen").alt = producto.titulo;
} else {
  document.body.innerHTML = "<p>Producto no encontrado.</p>";
}
