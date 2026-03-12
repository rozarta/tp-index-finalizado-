<?php
session_start();

include 'conexion.php';

$nombre = strtolower(trim($_POST["nombre"]));
$email = trim($_POST["email"]);
$telefono = trim($_POST["telefono"]);
$clave = trim($_POST["clave"]);
$clavee = trim($_POST["clavee"]);

if($clavee!==$clave){
    die("las contraseñas no coinciden.<a href=''registro.html>Volver</a");
}
$clave_enctriptada= password_hash($clavee, PASSWORD_DEFAULT);
$sql= "INSERT INTO usuario (nombre, email, telefono, clave, $clavee) 
       VALUES('$nombre', '$email', '$telefono', '$telefono', '$clave')";

if($conn->query($sql)===TRUE){
    $_SESSION['usuario'] = $nombre;
    $_SESSION['email'] = $email;
    header("Location: registro_exitoso.html");//crear pantalla registrp exitoso
    exit();
}else{
    echo "Error al registrar: " . $conn->error;
}
$conn->close();

?>