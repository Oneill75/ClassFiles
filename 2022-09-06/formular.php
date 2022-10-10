<!DOCTYPE html>
<html lang="de">
	<head>
		<meta charset="UTF-8">
		<title>Ein Formular</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!-- link href="css/styles.css" rel="stylesheet" -->
		<!-- script src="js/script.js"></script -->
		<link href="favicon.ico" rel="icon" type="image/ico">
	</head>
	<body>
		<h1>Formulare</h1>
		<h2>Ein Formular<h2>
		<h3>.... mit der GET-Methode</h3>
		<form>
			<input type="text" name="benutzername">
			<input type="password" name="passwort">
			<input type="submit" value="Absenden">
		</form>
		<h2>Ein weiteres Formular</h2>
		<h3>.... mit der POST-Methode und dem action-Attribut</h3>
		<form method="POST" action="formular-auswerten.php">
			<input type="text" name="benutzername">
			<input type="password" name="passwort">
			<input type="submit" value="Absenden">
		</form>
	</body>
</html>