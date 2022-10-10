<!DOCTYPE html>
<html lang="de">
	<head>
		<meta charset="UTF-8">
		<title>Hallo Welt!</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!-- link href="css/styles.css" rel="stylesheet" -->
		<!-- script src="js/script.js"></script -->
		<link href="favicon.ico" rel="icon" type="image/ico">
        <!-- meta http-equiv="refresh" content="3;url=https://www.example.org"-->
	</head>
	
    <body>
        <header>
            <p>Beschreibung</p>
            <img src="picture.png" alt="Ein Bild">
            <img src="https://www.w3schools.com/images/stickman.gif" alt="Noch ein Bild">
            <nav>
                <ul>
                    <li><a href="pages/impressum.html" titel="Zum Impressum ...">Impressum</a></li>
                    <li><a href="pages/datenschutz.html" titel="Zur Datenschutzerklärung ...">Datenschutzerklärung</a></li>
                </ul>    
            </nav>
        </header>

        <main>
            <article>
                <section>
                    <h2>Das Ei...</h2>
                    <p>Lorem ipsum</p>
                </section>
                <section>
                    <h2>Kontakt</h2>
                    <address>
                        Seefeld Straß 283<br>
                        13047 Berlin<br>
                        GERMANY
                    </address>
                    <p>Lorem ipsum</p>
                </section>
            </article>

            <article>
                <h2>Text Content Elements</h2>
                <ol>
                    <li>Syntax</li>
                    <li>Semantics</li>
                </ol>
            </article>
        </main>
        
        <footer>
            <p>Weiterführende Links</p>
            <nav>
                <ul>
                    <!-- # für den Link an den Anfang der Seite -->
                    <li><a href="https://www.wikipedia.org" titel="Zum Wiki.." target="_blank">Wikipedia</a></li>
                    <li><a href="https://www.google.com" titel="Zu Google.." target="_blank">Google</a></li>
                </ul>    
            </nav>
        </footer>
        
        <aside>
            <nav>
                <ul>
                    <!-- # für den Link an den Anfang der Seite -->
                    <li><a href="#" titel="Nach Oben">Nach Oben</a></li>
                </ul>    
            </nav>
        </aside>
		<h1>Hallo Welt!</h1>
		<p>Willkommen auf index.php!</p>
		<p>Heute ist der <?php echo date("d.m.Y");?>.</p>
	</body>
</html>