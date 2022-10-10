<!DOCTYPE html>
<html lang="de">
	<head>
		<meta charset="UTF-8">
		<title>Hallo Formular!</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link href="css/styles.css" rel="stylesheet">
		<script src="js/script.js" defer></script>
		<link href="/favicon.ico" rel="icon" type="image/ico">
	</head>
	<body>
		<style>
			h2 {color: yellow;}
		</style>
		
		<h1>Formulare</h1>
		<h2>Hallo Welt!</h1>
		<p style="color: turquoise;">Willkommen auf index.php!</a></p>
		<p>Heute ist der <?=date("d.m.Y")?>.</p>
		
		<h2 style="color: #333";>Ein Formular ...</h2>
		<h3 style="color: pink";>.... mit der POST-Methode und dem action-Attribut</h3>
		<form method="POST" action="formular-auswerten.php">
			<!-- <label for="benutzername">Benutzername:</label> -->
			<input type="text" name="benutzername" id="benutzername" placeholder="benutzername">
			<!-- <label for="passwort">Passwort:</label> -->
			<input type="password" name="passwort" id="passwort" placeholder="passwort">
			<!-- <span id="hilfebutton">?</span> -->
			<!-- <input type="button" value="Absenden"> -->
			<button type="button" id="sendData">Absenden</button>
		</form>
		<div id="info">
			 
		</div>
	</body>
</html>