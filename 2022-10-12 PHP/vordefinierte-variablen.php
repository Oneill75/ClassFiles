<style>
	pre { font-size: 1.25rem }
	b { color: navy; }
</style>
<?php
$headlinetext = 'PHP &mdash; Vordefinierte Variablen, Auswahl';
//https://www.php.net/manual/de/language.variables.predefined.php
//https://www.php.net/manual/de/reserved.variables.php
?>
<h2><?=$headlinetext?></h2>
<pre>
<?php
// echo '<b>$GLOBALS</b>: ' . PHP_EOL;
// print_r($GLOBALS);

// echo '<b>$_SERVER</b>: ' . PHP_EOL;
// print_r($_SERVER);

// echo '<b>$_REQUEST</b>: ' . PHP_EOL;
// print_r($_REQUEST);

// echo '<b>$_GET</b>: ' . PHP_EOL;
// print_r($_GET);

// echo '<b>$_POST</b>: ' . PHP_EOL;
// print_r($_POST);

// echo '<b>$_SERVER["REQUEST_URI"]</b>: ' . PHP_EOL;
// echo ($_SERVER['REQUEST_URI']) . PHP_EOL;

echo '<b>Full Host Adress</b>: ' . PHP_EOL;
echo ($_SERVER['HTTP_REFERER']);
$path = $_SERVER['SCRIPT_FILENAME'];
echo basename($path);
echo ($_SERVER['QUERY_STRING']);
?>
</pre>
