<?php
# data form database as array
$arr = [
	["benutzername" => "Musterfrau","mitarbeiterkennzahl" => "1234567"],
	["benutzername" => "Doe","mitarbeiterkennzahl" => "7654321"],
	["benutzername" => "Иванов","mitarbeiterkennzahl" => "9875432"],
	["benutzername" => "王五","mitarbeiterkennzahl" => "23456789"],
	["benutzername" => "משה ","mitarbeiterkennzahl" => "3456789"]
];

# output array as json

echo json_encode($arr);

# Das Array wird zwar nach dem Kommentar gecalled, aber im Browser noch vor dem Kommentar angezeigt.