<?php

if(!empty($_POST)) {
	$eingabe = htmlspecialchars($_POST["eingabe"]);
	$benutzername =  htmlspecialchars($_POST["benutzername"]);
  $mitarbeiterkennzahl =  htmlspecialchars($_POST["mitarbeiterkennzahl"]);
}

//echo $eingabe . "\n";
//echo $benutzername . "\n" ;
//echo $mitarbeiterkennzahl;

$arr = [
  "eingabe" => $eingabe,
  "benutzername" => $benutzername,
  "mitarbeiternummer" => $mitarbeiterkennzahl
];

echo json_encode($arr);