<?php
  function get_database () {
    $options = array(
      PDO::ATTR_PERSISTENT => true,
      PDO::MYSQL_ATTR_USE_BUFFERED_QUERY => true,
      PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
      PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    );

    $db = new PDO('mysql:host=localhost;dbname=kalkhoffwaschzettel','root','',$options);
    $db->query('SET NAMES utf8');
    return $db;
  }