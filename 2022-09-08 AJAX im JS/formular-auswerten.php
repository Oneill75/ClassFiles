<?php
echo "<pre>\n";

if(!empty($_GET)) {
	var_dump($_GET);
	print_r($_GET);
	$bname = filter_var($_GET["benutzername"], FILTER_SANITIZE_STRING);
	$pwd =  htmlspecialchars($_GET["passwort"]);
}

if(!empty($_POST)) {
	var_dump($_POST);
	print_r($_POST);
	$bname = filter_var($_POST["benutzername"], FILTER_SANITIZE_STRING);
	$pwd =  htmlspecialchars($_POST["passwort"]);
}

echo $bname . "\n";
echo $pwd ;

echo "</pre>\n";
