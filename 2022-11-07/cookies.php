<?php
$value = "irgendwas von irgendwo";
setcookie("phpcookie", $value);
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="js/script.js" defer></script>
  <title>Cookies</title>
</head>
<body>
  <h1>PHP-Cookie</h1>
  <p id="infophp">
    <pre>
      <?php 
        var_dump($_COOKIE) 
      ?>
    </pre>
  </p>
  <h2>JavaScript-Cookie</h2>
  <p id="infojs"></p>
  <button id="clearcookies" type="button">Cookies löschen</button>
</body>
</html>