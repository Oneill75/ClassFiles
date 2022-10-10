<?php
$user = "root";
$pass = "";
$query1 = "SELECT id,email from user";
try {
	$connection = mysqli_connect('localhost',$user, $pass,'fi321');
	$result = mysqli_query($connection, $query1);
	while($row = mysqli_fetch_assoc($result)){
		$temparray[] = $row;
	};
	$data=json_encode($temparray);
	header('Content-Type: application/json');
	echo $data;
} catch (PDOException $e) {
	print "Error!: " . $e->getMessage() . "<br/>";
	die();
}
?>