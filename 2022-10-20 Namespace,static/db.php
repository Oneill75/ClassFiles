<?php

require_once './php/classes/class.database.php';
echo "\n";
echo "\n";

$db = new Dbconnect('fi321','root','');

$result = $db->createTable('user2','LIKE user');
var_dump($result);
echo "\n";
echo "\n";

$result = $db->selectTableData('user','*','');
var_dump($result);
echo "\n";
echo "\n";

$result = $db->selectTableData('user','username,email',' ');
var_dump($result);
echo "\n";
echo "\n";

$result = $db->deleteTableData('user','WHERE id = 1000');
var_dump($result);
echo "\n";
echo "\n";

$result = $db->insertTableData('user',"1000,'Hansel73','12394575','hansel73@aol.com',0,'Member'");
var_dump($result);
echo "\n";
echo "\n";

$result = $db->updateTableData('user',"username = 'Haraldson2', email = 'Haraldson@aol.com'",'WHERE id = 1000');
var_dump($result);
echo "\n";
echo "\n";

// $result = $db->deleteTable('user2');
// var_dump($result);
// echo "\n";
// echo "\n";