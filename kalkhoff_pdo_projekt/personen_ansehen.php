<?php
  require_once 'inc/funktionen.inc.php';
  $db = get_database();
  $request = $db->query('SELECT * FROM personen');
  $data = $request->fetchAll();
  $request = null;
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Personen ansehen</title>
</head>
<body>
  <h1>Personen ansehen</h1>

  <table>
    <tr>
      <th>Vorname</th>
      <th>Nachname</th>
      <th>E-Mail</th>
      <th>$nbsp;</th>
    </tr>
    <?php foreach ($data as $person) { ?>
      <tr>
        <td><?php echo $person['vorname'] ?></td>
        <td><?php echo $person['nachname'] ?></td>
        <td><?php echo $person['email'] ?></td>
        <td><a href="person_bearbeiten.php?id=<?php echo $person['id']; ?>">bearbeiten</a></td>
      </tr>
    <?php } ?>
  </table>
  <p><a href="person_anlegen.php">Neue Person anlegen</a></p>
</body>
</html>
