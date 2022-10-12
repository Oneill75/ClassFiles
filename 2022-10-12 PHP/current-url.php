<?php
$protocol = 'http' . (isset($_SERVER['HTTPS']) ? 's' : '') . '://';
$host = $_SERVER['HTTP_HOST'];
$port = ($_SERVER['SERVER_PORT'] == 80 ? '' : ':' . $_SERVER['SERVER_PORT']);
$uri = $_SERVER['REQUEST_URI'];
$current_url = $protocol . $host . $port . $uri;
echo $current_url;
