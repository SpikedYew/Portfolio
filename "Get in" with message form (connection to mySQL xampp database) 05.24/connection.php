<?php
$host = "localhost";
$username = "root";
$password = "";
$database = "getin";

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
}

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$gender = $_POST['gender'];
$email = $_POST['email'];
$number = $_POST['number'];
$message = $_POST['message'];

$sql = "INSERT INTO getin (firstName, lastName, gender, email, number, message) VALUES ('$firstName','$lastName','$gender','$email','$number','$message')";
if ($conn->query($sql) === TRUE){
    echo "Działa, wysłano superasnie";
}
else {
    echo "Error: ".$sql."<br>".$conn->error;
}
?>
