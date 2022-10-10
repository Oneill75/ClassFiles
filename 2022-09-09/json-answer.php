<?php
$user = "root";
$pass = "";
$sql = "SELECT * from user";

try {
    $conn = new PDO('mysql:host=localhost;dbname=fi321', $user, $pass);
    $stm = $conn->prepare($sql);
    $stm->execute();
    $result = $stm->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($result);
    echo "\n";
    $conn = null;
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}