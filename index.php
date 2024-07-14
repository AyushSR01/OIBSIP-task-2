<?php
$server="localhost";
$username="root";
$password="";

$conn=mysqli_connect($server,$username,$password);

if(!$conn){
    die("Connect is not established due to".mysqli_connect_errror());
}

$firstname=$_POST['firstname'];
$lastname=$_POST['lastname'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$desc=$_POST['desc'];

$sql="INSERT INTO `form` (`Sno.`, `First Name`, `Last Name`, `Email`, `Phone`, `Message`, `Date Time`) VALUES ('$firstname', '$lastname', '$email', '$phone', '$desc', current_timestamp());";

echo $sql;



?>