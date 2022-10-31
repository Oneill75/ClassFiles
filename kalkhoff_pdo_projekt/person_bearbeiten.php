<?php
  require_once 'inc/funktionen.inc.php';
  $db = get_database();
  
  if(!empty($_REQUEST['vorname'])){
    if(preg_match_all('/[^a-zA-z-]+/u',$_REQUEST['vorname'])){
      $message = 'Ungültiger Vorname';
    } elseif(preg_match_all('/[^a-zA-z-]+/u',$_REQUEST['nachname'])){
      $message = 'Ungültiger Nachname';
    } elseif(!filter_var($_REQUEST['email'], FILTER_VALIDATE_EMAIL)){
      $message = 'Ungültige E-Mail Adresse';
    }else {
      if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $request = $db->prepare('UPDATE personen SET vorname =:vorname, nachname =:nachname, email =:email WHERE id=:id');
        $request->execute($_REQUEST);
        $message = 'Person ' . $_REQUEST['vorname'] . ' ' . $_REQUEST['nachname'] . ' wurde erfolgreich bearbeitet.';
      }
    }
  }
  $request = $db->prepare('SELECT * FROM personen WHERE id=?');
  $request->execute(array($_REQUEST['id']));
  $person = $request->fetch();
  $request = null;
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Person bearbeiten</title>
</head>
<body>
  <h1>Person bearbeiten</h1>
  <?php if ($message) { ?>
    <p><?php echo $message; ?></p>
  <?php } ?>
  <form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="post">
    <label for="vorname">Vorname:</label>
    <input type="text" name="vorname" value="<?php echo $person['vorname'];?>"><br>
    <label for="nachname">Nachname:</label>
    <input type="text" name="nachname" value="<?php echo $person['nachname'];?>"><br>
    <label for="email">E-Mail:</label>
    <input type="text" name="email" value="<?php echo $person['email'];?>"><br>
    <input type="hidden" name="id" value="<?php echo $person['id'];?>">
    <input type="submit" value="bearbeiten">
  </form>
  <form action="person_loeschen.php" method="post">
    <input type="hidden" name="id" value="<?php echo $person['id'];?>">
    <input type="submit" value="löschen">
  </form>
  <p><a href="personen_ansehen.php">zurück</a></p>
</body>
</html>