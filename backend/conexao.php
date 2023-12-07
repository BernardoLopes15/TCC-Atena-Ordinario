<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Content-Type");

    $servername = "localhost:3306";
	$username = "root";
	$password = "usbw";
	$database = "db_psicologia";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $database);

	/*if($conn->ping()){
		echo "Connection is ok";
	}
	else {
		echo "Error: %s\n", $mysqli->error;
	}*/
?>