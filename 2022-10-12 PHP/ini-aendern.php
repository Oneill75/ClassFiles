<?php
echo '<pre>';
echo ini_get('display_errors') . "\r";

echo $einevariable;

if (!ini_get('display_errors')) {
    ini_set('display_errors', '0');
}

echo $einevariable;

ini_set('memory_limit', '1024M');
echo ini_get('memory_limit');

echo ini_get('display_errors') . PHP_EOL;
echo '</pre>';
