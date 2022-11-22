<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="css/style.css" rel="stylesheet">
  <script src="js/register.js" defer></script>
  <title>Interstate PR</title>
</head>
<body>
  <div class="flex-container">
    <div class="test-container">
      <img src="../Interstate_PR_Logo_Final.png">
      <div>Interstate PR GmbH</div>
    </div>
    <nav class="navigation-left">
        <!-- <button type="button" id="login">Anmelden</button> -->
        <!-- <button type="button" id="releases">Veröffentlichungen</button>
        <button type="button" id="drafts">Eigene Entwürfe</button>
        <button type="button" id="deletes">Markierte Löschungen</button>
        <button type="button" id="logout">Abmelden</button> -->
    </nav>
    <div class="main-content">
      <form action='index.php' class="loginbox" id="loginbox">
        <input name= "Username" id="Username" type="text" placeholder="Benutzername">
        <input name="Password" id="Password" type="password" placeholder="Passwort">
        <button type="submit" id="login" >Anmelden</button>
        <button type="button" id="newUser">Neuer Benutzer</button>
        <?php
          include 'php/db_connect.php'
        ?>
      </form>
    </div>
  </div>
</body>
</html>