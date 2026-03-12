<?php
session_start();

if ((isset($_SESSION["usuario"])) || (isset($_SESSION["clave"])) )
{
    session_unset();
    session_destroy();
}
?>