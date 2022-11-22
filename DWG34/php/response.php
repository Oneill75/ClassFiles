<?php

$dataForJSON = ['response' => 'no data'];

/*
echo 'isset($_POST): ' . isset($_POST); // always true (1)
echo '<br>';
echo 'empty($_POST): ' . empty($_POST); // true (1) if no data
var_dump($_POST);
*/

if (!empty($_POST)) {
	if (isset($_POST['dobDay'])) {
		$dobDay = htmlspecialchars($_POST['dobDay']);
	}
	if (isset($_POST['dobMonth'])) {
		$dobMonth = htmlspecialchars($_POST['dobMonth']);
	}
	if (isset($_POST['dobYear'])) {
		$dobYear = htmlspecialchars($_POST['dobYear']);
	}
}

if (isset($dobDay, $dobMonth, $dobYear)) {
	date_default_timezone_set('Europe/Berlin');
	$timestamp = mktime(0, 0, 0, intval($dobMonth), intval($dobDay), intval($dobYear));
	$ageinseconds = time() - $timestamp;
    // 365 Tage zu 24 Stunden zu 60 Minuten zu 60 Sekunden
    $age = $ageinseconds / 60 / 60 / 24 / 365;
	$dataForJSON = [
		'timestamp' => $timestamp,
		'ageinseconds' => $ageinseconds,
		'age' => floor($age)
	];
}

echo json_encode($dataForJSON);
