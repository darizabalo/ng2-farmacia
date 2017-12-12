<?php

include("conexion.php");

//header("Access-Control-Allow-Origin: *");
//header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');
header('Accept: application/json');

//if (isset($_POST["producto"])) {
    //$palabra = $_POST["producto"];
    //$palabra = "baya";
    $json = file_get_contents('php://input'); 
    $obj = json_decode($json);
    $palabra = $obj->producto;

    if ($palabra != '') {
        $palabraProcesada = str_replace(" ", "%", $palabra);
        $palabra1 = "PRODUCTO like '$palabraProcesada%' ";
    }

    $sql="SELECT PRODUCTO, CODBARRA, CODIGO FROM `productos` where $palabra1 order by PRODUCTO";
    $resultado = mysqli_query($link, $sql);

    $productos = array();
    $i = 0;
    while ($fila = mysqli_fetch_object($resultado)) {
        $productos[$i] = $fila;
        $i++;
    }

    $jproductos = json_encode($productos);
    http_response_code(200);
    echo $jproductos;
//}

?>

