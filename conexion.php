<?php
// Parámetros de conexión a nuestro servidor Wamp
$servidor = "localhost";   // Servidor donde está alojada la base de datos
$usuario = "root";         // Usuario de la base de datos
$password = "";            // Contraseña del usuario
$base_datos = "Pasteleria_AF"; // Nombre de la base de datos

// Crear la conexión, $conexion es un objeto de la de la clase msqli
$conexion = new mysqli($servidor, $usuario, $password, $base_datos);

/*
Verificar si la conexión fue exitosa la -> es un operador de acceso al objeto en PHP
sirve para acceder a las propiedades. 
connect_error es una propiedad interna del objeto mysqli
que guarda el mensaje de error si la conexión falló.
* Si la conexión salió bien, esa propiedad está vacía (null o cadena vacía).
* Si falló, contiene el texto del error.
*/
if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}
else{
    echo "conexion exitosa";
}

// Cerrar la conexión (opcional al final del script)
//$conexion->close();
?>