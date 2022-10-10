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
			<input type="text" name="benutzername">
			<input type="password" name="passwort">
			<span id="passwordhelp">?</span>
			<input type="submit" value="Absenden">
		</form>
		<div id="info"></div>
	
	</body>
</html>