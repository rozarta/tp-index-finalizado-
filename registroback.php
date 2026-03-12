<?php
session_start();

include 'conexion.php';

$nombre = strtolower(trim($_POST["nombre"])); // trim elimina los espacios adelante y detras
$email = trim($_POST["email"]);
$telefono = trim($_POST["telefono"]);
$clave = trim($_POST["clave"]);
$clavee = trim($_POST["clavee"]);


if ((!empty($nombre)) && (!empty($email)) && (!empty($telefono)) && (!empty($clave) && (!empty($clavee)))) //verificamos si la variable no es null con la funcion isset
{
   
   if ($clave==$clavee) // VERIFICA QUE SEAN LAS MISMAS CLAVES
   {
    if ((preg_match_all('/[A-Z]/', $clave) >= 2) && (preg_match_all('/[0-9]/', $clave)>=2) && (strlen($clave)>=6))
    {
        
        $_SESSION["usuario"] = $usuario;
    
      
        $password_hash = password_hash($clave, PASSWORD_DEFAULT); //creamos un hash seguro para la contraseña
        
        $sql = "INSERT INTO usuario (user, pass) VALUES (?,?)"; //insercion para la DB, ? los usamos para mejorar la seguridad
        
        $stmt = $conexion->prepare($sql);

        $stmt->bind_param("ss", $usuario,$password_hash); // vinculamos los ? con los valores a reemplazar, la 's' significa que enviamos un String

        if($stmt->execute()){
            echo "Registro creado exitosamente.";
            header("Location:login.php");
        }
        else{
            echo "Error";
        }

        // Cerrar la conexión
        $conexion->close();
        
        
    }
    else
    {
        $clave = null;
        $clavee = null;
        $usuario = null;
        echo "<script type='text/javascript'>alert('Clave Incorrecta');
        window.location.href = 'registro.php';</script>";
    }
   }
   else
   {
    if (isset($_GET["usuario"]) && (str_contains($usuario, "@gmail.com")))
    {
        echo "<script type='text/javascript'>alert('No coinciden las contraseñas');
        window.location.href = 'registro.php';</script>";
        $clave = null;
        $clavee = null;
        $usuario = null;
        exit;
    }
    else
    {
        echo "<script type='text/javascript'>alert('La cuenta debe ser gmail');
        window.location.href = 'registro.php';</script>";
        $clave = null;
        $clavee = null;
        $usuario = null;
        exit;
    }
    
   }
}
else
{
        echo "<script type='text/javascript'>alert('Campos Vacios');
        window.location.href = 'registro.php';</script>";
        $clave = null;
        $clave_rep = null;
        $usuario = null;
        exit; // detiene el script
}
?>