Hallo <?php echo htmlspecialchars($_POST['name']); ?>.
Sie sind <?php echo (int)$_POST['alter']; ?> Jahre alt.



<?php
$var = "du";
$Var = "ich";
echo "$var, $Var";           // gibt "du, ich" aus

// $4site  = 'nicht jetzt';     // ungültig, da Anfang eine Zahl
$_4site = 'nicht jetzt';     // gültig, da Unterstrich am Anfang
$täbyte = 'irgendwas';       // gültig, da 'ä' dem (Erweiterten) ASCII-Wert 228 entspricht
?>


<?php
$foo = 'Bob';             // 'Bob' der Variablen $foo zuweisen.
$bar = &$foo;             // $foo per $bar referenzieren.
$bar = "Ich heiße $bar";  // $bar verändern...
echo $bar;
echo $foo;                // $foo wurde ebenfalls verändert.
?>


<?php
$foo = 25;
$bar = &$foo;      // Gültige Zuweisung.
// $bar = &(24 * 7);  // Ungültig, da ein unbenannter Ausdruck referenziert wird.

function test()
{
    return 25;
}

$bar = &test();    // Ungültig.
?>


<?php
// Nicht gesetzte UND nicht referenzierte (kein Verwendungskontext) Variable;
// gibt NULL aus
var_dump($unset_var);

// Verwendung als boolescher Wert; gibt 'false' aus (siehe den ternären
// Operator für Details zu dieser Syntax)
echo($unset_bool ? "true\n" : "false\n");

// Verwendung als Zeichenkette; gibt 'string(3) "abc"' aus
$unset_str .= 'abc';
var_dump($unset_str);

// Verwendung als Ganzzahl; gibt 'int(25)' aus
$unset_int += 25; // 0 + 25 => 25
var_dump($unset_int);

// Verwendung als Gleitkommazahl; gibt 'float(1.25)' aus
$unset_float += 1.25;
var_dump($unset_float);

// Verwendung als Array; gibt array(1) {  [3]=>  string(3) "def" } aus
$unset_arr[3] = "def"; // array() + array(3 => "def") => array(3 => "def")
var_dump($unset_arr);

// Verwendung als Objekt; erzeugt ein neues stdClass-Objekt
// (siehe http://www.php.net/manual/en/reserved.classes.php)
// Gibt aus: object(stdClass)#1 (1) {  ["foo"]=>  string(3) "bar" }
$unset_obj->foo = 'bar';
var_dump($unset_obj);
?>
