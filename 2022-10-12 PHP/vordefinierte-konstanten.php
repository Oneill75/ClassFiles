<style>
	pre { font-size: 1.25rem }
	b { color: navy; }
</style>
<?php
$headlinetext = 'PHP &mdash; Vordefinierte Konstanten, Auswahl';
//https://www.php.net/manual/de/reserved.constants.php
?>
<h2><?=$headlinetext?></h2>
<pre>
<?php
// Zeichenketten verknüpfen (konkatinieren) mit .
// https://www.php.net/manual/de/language.operators.string.php
echo '<b>PHP_VERSION:</b> ' . PHP_VERSION . "\n";
// https://en.wikipedia.org/wiki/ASCII
echo 'ord(<b>PHP_EOL</b>): ASCII (dezimal) ' . ord(PHP_EOL) . ', Abkürzung: CR (Carriage Return), Escape-Sequenz: \r' . PHP_EOL;
echo '<b>PHP_OS</b>: ' . PHP_OS . PHP_EOL;
// https://www.php.net/manual/de/language.constants.magic.php
echo 'Die magische Konstante <b>__LINE__</b> enthält die Zeilennummer: ' . __LINE__ . PHP_EOL;
echo 'Die magische Konstante <b>__FILE__</b> enthält den vollständigen Pfad- und Dateinamen: ' . __FILE__ . PHP_EOL;
echo 'Die magische Konstante <b>__DIR__</b> enthält den vollständigen Pfad: ' . __DIR__ . PHP_EOL;
?>
</pre>
