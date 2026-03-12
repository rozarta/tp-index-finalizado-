<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>BIENVENIDO</h1>
    <?php
        session_start();
        echo $_SESSION["usuario"];
    ?>
      <p><a href='index.php'>cerrar sesion</a>.</p>
</body>
</html>