<?php
$dataForJSON = ['response' => 'ok'];
// echo json_encode($dataForJSON);

$username = $_POST['username'];
$password = $_POST['password'];
echo "</br>";
echo $password;
echo "</br>";

// PHP Connection with Database
require_once './classes/class.database.php';
$db = new Dbconnect('fi321','root','');

$getData = $db->selectTableData();
$data = [];

// creating an Array for the response
foreach($getData as $dbData) {
  $array = [];
  $array['id'] = $dbData['id'];
  $array['username'] = $dbData['username'];
  $array['password'] = $dbData['password'];
  $array['email'] = $dbData['email'];
  $array['active'] = $dbData['active'];
  $array['role'] = $dbData['role'];
  $data[] = $array;
}

// using the database data to confirm login credentials
$loginData = [];
foreach($data as $row) {;
  if($username == $row['username'] && password_verify($password, $row['password'])) {
    echo 'Correct';
    $newArray = [];
    $newArray['id'] = $row['id'];
    $newArray['username'] = $row['username'];
    $newArray['email'] = $row['email'];
    $newArray['active'] = $row['active'];
    $newArray['role'] = $row['role'];

    session_id($username);
    session_start();
    $newArray['sessID'] = session_id();
    $loginData[] = $newArray;
    echo "</br>";
    // var_dump($loginData);
    echo json_encode($loginData);
    exit();
  } else {
    echo "</br>";
    echo 'not working';
  }
}

