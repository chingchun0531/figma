<?php
$DBSERVER = 'localhost';
$DBUSERNAME = 'root';
$DBPASSWORD = '';

$link = mysqli_connect($DBSERVER,$DBUSERNAME,$DBPASSWORD);
$link->set_charset('UTF-8');

if(!$link){
    die('Connetion failed:' . mysqli_connect_error());
}
echo 'Connect Successfully';
?>