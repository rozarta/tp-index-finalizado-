<?php
 if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];
 

    
    // Validación básica
    if ($email === "usu@gmail.com" && $password === "123") {
        echo "Inicio de sesión exitoso.";
    } else {
        echo "Correo o contraseña incorrectos.";
    }
} else {
    echo "Acceso no válido.";
}
?>