<?php
echo "<pre>\n";

var_dump($_POST);
print_r($_POST);

$bname = filter_var($_POST["benutzername"], FILTER_SANITIZE_STRING);
$pwd =  htmlspecialchars($_POST["passwort"]);

echo $bname . "\n";
echo $pwd ;

echo "</pre>\n";
