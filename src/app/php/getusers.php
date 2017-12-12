<?php

//get single user by id currently not used

include("conexion.php");

header("Access-Control-Allow-Origin: *");

$sql = "SELECT * FROM `farm_usuario`, `farm_theme` WHERE farm_usuario.the_id = farm_theme.the_id order by usu_nombre";
$resultado = mysqli_query($link, $sql);

if (isset($_GET['id'])) {
    $usu_id = $_GET['id'];
    $user;
    $i = 0;
    while ($fila = mysqli_fetch_object($resultado)) {
        if ($fila->usu_id == $usu_id) {
            $user = $fila;
            break;
        }
    }

    $juser = json_encode($user);
    echo $juser;
}    

else {
    $users = array();
    $i = 0;
    while ($fila = mysqli_fetch_object($resultado)) {
        $users[$i] = $fila;
        $i++;
    }

    $jusers = json_encode($users);
    echo $jusers;
}

?>
