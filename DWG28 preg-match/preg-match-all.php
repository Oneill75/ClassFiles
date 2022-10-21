<pre>
<?php
// $string = 'Müller-Lüdenscheidt'; // https://de.wikipedia.org/wiki/Herren_im_Bad
// /* Jedes Vorkommen des Zeichens ü soll gefunden werden.
//    Einfache Suche nach Zeichen oder Zeichenketten. */
// $pattern = '//';
// $match = preg_match_all($pattern, $string, $matches, PREG_OFFSET_CAPTURE);
// echo "Zeichenkette: '$string'";
// echo "\n";
// echo "Das Muster '$pattern' wurde in der Zeichenkette ", $match ? "gefunden" : "nicht gfunden", ".";
// echo "\n";
// echo "Häufigkeit: ", sizeof($matches[0]), " Mal.";
// echo "\n";
// /*
// print_r($matches);
// echo "\n";
// */
// echo "<hr>";



// $string = "https://www.example.org";
// /* Beginnt die Zeichenkette mit 'https'?
//    Suche mit ^. */
// $pattern = "//";
// $match = preg_match_all($pattern, $string, $matches, PREG_OFFSET_CAPTURE);
// echo "Zeichenkette: '$string'";
// echo "\n";
// echo "Das Muster '$pattern' wurde in der Zeichenkette ", $match ? "gefunden" : "nicht gfunden", ".";
// echo "\n";
// echo "Häufigkeit: ", sizeof($matches[0]), " Mal.";
// echo "\n";
// /*
// print_r($matches);
// echo "\n";
// */
// echo "<hr>";



// $string = "https://www.organisation.org";
// /* Endet die Zeichenkette auf '.org'?
//    Suche mit $. */
// $pattern = "//";
// $match = preg_match_all($pattern, $string, $matches, PREG_OFFSET_CAPTURE);
// echo "Zeichenkette: '$string'";
// echo "\n";
// echo "Das Muster '$pattern' wurde in der Zeichenkette ", $match ? "gefunden" : "nicht gfunden", ".";
// echo "\n";
// echo "Häufigkeit: ", sizeof($matches[0]), " Mal.";
// echo "\n";
// // Prüfen Sie das Muster, indem Sie in der Variable $string
// // .org zu .cyborg ändern und das Array $matches ausgeben lassen. 
// /*
// print_r($matches);
// echo "\n";
// */
// echo "<hr>";



// $string = "https://www.example.org";
// /* Enthlt die Zeichenkette genau zwei Backslashs?
//    Suche mit {}. */
// $pattern = "//";
// $match = preg_match_all($pattern, $string, $matches, PREG_OFFSET_CAPTURE);
// echo "Zeichenkette: '$string'";
// echo "\n";
// echo "Das Muster '$pattern' wurde in der Zeichenkette ", $match ? "gefunden" : "nicht gfunden", ".";
// echo "\n";
// echo "Häufigkeit: ", sizeof($matches[0]), " Mal.";
// echo "\n";
// /*
// print_r($matches);
// echo "\n";
// */
// echo "<hr>";



// $string = "Rübölsoße";
// /* Kommen in der Zeichenkette die Buchstaben A bis Z, Umlaute, Bindestriche
//    und ß-Schriftzeichen vor?
//    Suche mit
//    [a-z] - jedes Zeichen im Bereich von a-z
//    ()    - Gruppierung
//    |     - oder. */
// $pattern = "//";
// $match = preg_match_all($pattern, $string, $matches, PREG_OFFSET_CAPTURE);
// echo "Zeichenkette: '$string'";
// echo "\n";
// echo "Das Muster '$pattern' wurde in der Zeichenkette ", $match ? "gefunden" : "nicht gfunden", ".";
// echo "\n";
// echo "Häufigkeit: ", sizeof($matches[0]), " Mal.";
// echo "\n";
// /*
// print_r($matches);
// echo "\n";
// */

function test($string,$pattern) {
   //$pattern = "//";
   $match = preg_match_all($pattern, $string, $matches, PREG_OFFSET_CAPTURE);
   echo "Zeichenkette: '$string'";
   echo "\n";
   echo "Das Muster '$pattern' wurde in der Zeichenkette ", $match ? "gefunden" : "nicht gfunden", ".";
   echo "\n";
   echo "Häufigkeit: ", sizeof($matches[0]), " Mal.";
   echo "\n";
};

function validateEmail($string,$pattern) {
   //$pattern = "//";
   $match = preg_match_all($pattern, $string, $matches, PREG_OFFSET_CAPTURE);
   echo "Zeichenkette: '$string'";
   echo "\n";
   echo $match ? "Die E-Mail-Adresse '$pattern' ist erlaubt." : "Die E-Mail-Adresse '$pattern' ist nicht erlaubt.";
   echo "\n";
};

test('Müller-Lüdenscheidt','/ü/u');
test("https://www.example.org",'/^https/');
test("https://www.organisation.org",'/.org$/');
test("https://www.example.org",'/{\\,}/');
test("Rübölsoße",'/[a-z]|(ä|ü|ö|-|ß)/u');
validateEmail("hans.hesel-haus@aol.com","/[a-z0-9]+[.|-]*[a-z0-9]*@+[a-z0-9]+[.]+\b\w{2,3}\b/");   // Korrekt, da nur 2-3 Buchstaben am ende stehen (.com)
validateEmail("hans.hesel-haus@aol.past","/[a-z0-9]+[.|-]*[a-z0-9]*@+[a-z0-9]+[.]+\b\w{2,3}\b/i"); // Ungültig, da mehr als 3 Buchstaben am Ende stehen (.past)
validateEmail("hans.hesel-haus@aol.o","/[a-z0-9]+[.|-]*[a-z0-9]*@+[a-z0-9]+[.]+\b\w{2,3}\b/i"); // Ungültig, da nur 1 Buchstabe am Ende steht (.o)
validateEmail("hans.hesel-hausaol.pas","/[a-z0-9]+[.|-]*[a-z0-9]*@+[a-z0-9]+[.]+\b\w{2,3}\b/i");  // Ungültig, da kein @ in der E-Mail-Adresse steht
echo "<hr>";
?>
</pre>