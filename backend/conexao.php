<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Content-Type");

    $servername = "localhost:3306";
	$username = "root";
	$password = "admin";
	$database = "db_psicologia";

	// Create connection
	$conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
?>