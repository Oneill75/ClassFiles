<?php
  require_once 'inc/funktionen.inc.php';
  $db = get_database();

  $db->query('DROP TABLE IF EXISTS personen');
  $sql = 'CREATE TABLE personen (' .
          'id INT(5) AUTO_INCREMENT,' .
          'vorname VARCHAR(255),' .
          'nachname VARCHAR(255),' .
          'email VARCHAR(255),' .
          'PRIMARY KEY (id))' .
          'DEFAULT CHARSET=utf8';
  $db->query($sql);

  $persons[] = array('Thorsten', 'Schneider', 'ts@example.com');
  $persons[] = array('Marco', 'Emrich', 'me@example.com');
  $persons[] = array('Marc', 'Remolt', 'mr@example.com');

  $sql = 'INSERT INTO personen (vorname, nachname, email) VALUES (?,?,?)';
  $request = $db->prepare($sql);
  foreach ($persons as $p){
    $request->execute($p);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Datenbank installieren</title>
</head>
<body>
  <h1>Datenbank Installieren</h1>
  <p>Die Tabellen wurden erfolgreich angelegt</p>
  <p><a href="person_anlegen.php">Neue Person anlegen</a></p>
</body>
</html>
      