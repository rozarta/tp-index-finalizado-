<?php
include 'conexion.php';
session_start();

$email = $_POST['email'];
$password = $_POST['password'];

/*En PHP, $stmt hace referencia a un objeto de declaración preparada (Prepared Statement) cuando trabajas con bases de datos mediante MySQLi o PDO. Se usa principalmente para ejecutar consultas SQL de manera más segura y eficiente, especialmente cuando se manejan entradas de usuarios, ya que ayuda a prevenir ataques de inyección SQL.*/
// Preparar la consulta
$stmt = $conexion->prepare("SELECT pass FROM registro WHERE user = ?");

// Vincular el parámetro (usuario)
$stmt->bind_param("s", $email);

// Ejecutar la consulta
$stmt->execute();

// Va a guardar el resultado de la busqueda en la DB en $password_hash_db
$stmt->bind_result($password_hash_db);

// Obtener el resultado, La función $stmt->fetch() en PHP se utiliza para recuperar el siguiente resultado de una consulta ejecutada con una declaración preparada (Prepared Statement). Después de vincular variables con bind_result(), fetch() asigna los valores de la fila actual del conjunto de resultados a esas variables.


if ($stmt->fetch()) {
    // password_verify() toma la contraseña ingresada y el hash almacenado y verifica si el hash de la contraseña ingresada coincide con el hash almacenado.
    if (password_verify($password, $password_hash_db)) {
        header("Location: logon.php");
        $_SESSION["email"] = $email;
        exit; // detenemos el script
    } else {
        echo "Contraseña incorrecta";
    }
} else {
    echo "<script type='text/javascript'>alert('Usuario No Encontrado');
        window.location.href = 'index.php';</script>";
}

// Cerrar la declaración
$stmt->close();
//cerramos la conexion a la base de datos
$conexion->close();