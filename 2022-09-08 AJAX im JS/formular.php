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
			h2 { color: yellow; }
		</style>

		<h1>Formular</h1>
		<h2>Hallo Welt!</h2>
		<p style="color: turquoise;">Willkommen auf index.php!</a></p>
		<p>Heute ist der <?=date("d.m.Y")?>.</p>

		<h2 style="color: #333;">Ein Formular ...</h2>
		<h3 style="color: pink;">... mit der POST-Methode und dem action-Attribut</h3>
		<form method="POST" action="formular-auswerten.php">
			<label for="benutzername">Benutzername:</label>
			<input type="text" name="benutzername" id="benutzername" placeholder="Benutzername">
			<label for="passwort">Passwort:</label>
			<input type="password" name="passwort" id="passwort" placeholder="Passwort">
			<!-- span id="passwordhelp">?</span -->
			<button type="button" id="sendDataGET"><strong>Absenden via AJAX-GET</strong></button>
			<button type="button" id="sendDataPOST"><strong>Absenden via AJAX-POST</strong></button>
			<input type="submit" value="Normales Absenden des Formulars via POST">

		</form>
		<div id="info"></div>
	
	</body>
</html>