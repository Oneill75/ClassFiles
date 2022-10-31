<?php
  require_once 'inc/funktionen.inc.php';

  if(!empty($_REQUEST['vorname'])){
    if(preg_match_all('/[^a-zA-z-]+/u',$_REQUEST['vorname'])){
      $message = 'Ungültiger Vorname';
    } elseif(preg_match_all('/[^a-zA-z-]+/u',$_REQUEST['nachname'])){
      $message = 'Ungültiger Nachname';
    } elseif(!filter_var($_REQUEST['email'], FILTER_VALIDATE_EMAIL)){
      $message = 'Ungültige E-Mail Adresse';
    }else {
      if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $db = get_database();
        $sql = 'INSERT INTO personen (vorname, nachname, email) VALUES
        (:vorname, :nachname, :email)';
        $request = $db ->prepare($sql);
        $request -> execute($_REQUEST);

        $message = 'Person ' . $_REQUEST['vorname'] . ' ' . $_REQUEST['nachname'] . ' wurde erfolgreich angelegt.'; 
      }
    }
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Person anlegen</title>
</head>
<body>
  <h1>Person anlegen</h1>
  <?php if ($message) {?>
    <p><?php echo $message; ?></p>
  <?php } ?>
  <form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="post">
    <label for="vorname">Vorname:</label>
    <input type="text" name="vorname"><br>
    <label for="nachname">Nachname:</label>
    <input type="text" name="nachname"><br>
    <label for="email">E-Mail:</label>
    <input type="text" name="email"><br>
    <input type="submit" value="anlegen">
  </form>
  <p><a href="personen_ansehen.php">Personen ansehen</a></p>
</body>
</html>
