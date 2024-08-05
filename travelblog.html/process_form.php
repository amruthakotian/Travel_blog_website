<?php
$servername = "localhosts";
$username = "root";
$password = "";
$dbname = "contact";

// Create connection
$conn = new mysqli_query($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get user inputs
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$subject = $_POST['subject'];
$country = $_POST['country'];
//

// Insert data into the database
$sql = "INSERT INTO contact (first_name, last_name, subject, country) VALUES ('$first_name', '$last_name', '$subject', '$country')";

if ($conn->query($sql) === TRUE) {
    echo "Thank you! Your information has been submitted.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
