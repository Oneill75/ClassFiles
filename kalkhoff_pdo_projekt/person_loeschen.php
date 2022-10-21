<?php
  require_once 'inc/funktionen.inc.php';
  if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $db = get_database();
    $request = $db->prepare('DELETE FROM personen WHERE id=?');
    $request->execute(array($_REQUEST['id']));

    $message = 'Die Person wurde erfolgreich gelöscht';
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Person Löschen</h1>
  <?php if($message){ ?>
    <p><?php echo $message; ?></p>
  <?php } ?>  
  <p><a href="personen_ansehen.php">zurück</a></p>
</body>
</html>