<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <?php 
  echo $_SERVER['HTTP_USER_AGENT']; 
  ?>

  <?= '</br> Ausgabe dieser Zeichenkette mittels "?=" </br>' ?>
  
  <?php
    if (strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE') !== FALSE) {
  ?>
  <h3>strpos() hat nicht FALSE zurückgegeben</h3>
  <p>Sie verwenden den Internet Explorer</p>
  <?php
    } else {
  ?>
  <h3>strpos() hat FALSE zurückgegeben</h3>
  <p>Sie verwenden nicht den Internet Explorer</p>
  <?php
    }
  ?>

  <form action="action.php" method="post">
    <p>Ihr Name: <input type="text" name="name" /></p>
    <p>Ihr Alter: <input type="text" name="alter" /></p>
    <p><input type="submit" /></p>
  </form>
</body>
</html>