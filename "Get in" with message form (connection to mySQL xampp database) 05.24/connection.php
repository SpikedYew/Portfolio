<?php
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$gender = $_POST['gender'];
$email = $_POST['email'];
$number = $_POST['number'];
$message = $_POST['message'];

// Database connection
$conn = new mysqli('localhost','root','','getintouch');
if($conn->connect_error){
    echo "$conn->connect_error";
    die("Connection Failed : ". $conn->connect_error);
} else {
    $stmt = $conn->prepare("insert into gettingin(firstName, lastName, gender, email, number, message) values(?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssis", $firstName, $lastName, $gender, $email, $number, $message);
    $execval = $stmt->execute();
    //echo $execval;
    echo "<div style='font-family: Comic Sans MS, Comic Sans, cursive; font-size: 50px;'>Wiadomość wysłana</div>";
    $stmt->close();
    $conn->close();
}
?>