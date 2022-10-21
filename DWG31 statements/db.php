<?php

require_once './php/classes/class.database.php';
echo "\n";
echo "\n";

$db = new Dbconnect('fi321','root','');

$result = $db->createTable('user2','LIKE user');
echo "\n";
echo "\n";

$result = $db->selectTableData('user','*','');
echo "\n";
echo "\n";

$result = $db->selectTableData('user','username,email',' ');
echo "\n";
echo "\n";

$result = $db->deleteTableData('user','WHERE id = 1000');
echo "\n";
echo "\n";

$result = $db->insertTableData('user',"1000,'Hansel73','12394575','hansel73@aol.com',0,'Member'");
echo "\n";
echo "\n";

$result = $db->updateTableData('user',"username = 'Haraldson2', email = 'Haraldson@aol.com'",'WHERE id = 1000');
echo "\n";
echo "\n";

$result = $db->deleteTable('user2');
echo "\n";
echo "\n";