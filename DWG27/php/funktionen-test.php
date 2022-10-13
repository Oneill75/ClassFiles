<?php
function option1(){
  function testFunction1 ($lastname, $email, $firstname = "",   $phone = "") {
    $pattern = "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i"; /* Funktioniert nicht.. */
    $check = false;
    echo !preg_match('/[^a-zA-Z-]/', $firstname) ? "Der Vorname " . $firstname . " entspricht den Vorgaben." . "</br>" : "Der Vorname " . $firstname . " entspricht nicht den Vorgaben. (A-Z, a-z, -)" . "</br>";
    echo !preg_match('/[^a-zA-Z-]/', $lastname) ? "Der Nachname " . $lastname . " entspricht den Vorgaben." . "</br>" : "Der Nachname " . $lastname . " entspricht nicht den Vorgaben. (A-Z, a-z, -)" . "</br>";
    echo !preg_match('/[^0-9]/', $phone) ? "Die Telefonnummer " . $phone . " entspricht den Vorgaben." . "</br>" : "Die Telefonnummer " . $$phone . " entspricht nicht den Vorgaben. (A-Z, a-z)" . "</br>";
    echo !preg_match($pattern, $email) ? "Die E-Mail " . $email . " entspricht den Vorgaben." . "</br>" : "Die E-Mail " . $email . " entspricht nicht den Vorgaben. (a-z0-9@a-z0-9.a-z)" . "</br>";
    //return $check;
  }
  testFunction1("Hansel","hanselherbert1@aol.de","Hans-Herbert","1098712983");
}
?>

<?php
function option2() {
  function testFunction2 ($lastname, $email, $firstname = "",   $phone = "") {
    $pattern = "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i"; /* Funktioniert nicht.. */
    $check = false;
    echo !preg_match('/[^a-zA-Z-]/', $firstname) ? "Der Vorname " . $firstname . " entspricht den Vorgaben." . "</br>" : "Der Vorname " . $firstname . " entspricht nicht den Vorgaben. (A-Z, a-z, -)" . "</br>";
    echo !preg_match('/[^a-zA-Z-]/', $lastname) ? "Der Nachname " . $lastname . " entspricht den Vorgaben." . "</br>" : "Der Nachname " . $lastname . " entspricht nicht den Vorgaben. (A-Z, a-z, -)" . "</br>";
    echo !preg_match('/[^0-9]/', $phone) ? "Die Telefonnummer " . $phone . " entspricht den Vorgaben." . "</br>" : "Die Telefonnummer " . $phone . " entspricht nicht den Vorgaben. (A-Z, a-z)" . "</br>";
    echo !preg_match($pattern, $email) ? "Die E-Mail " . $email . " entspricht den Vorgaben." . "</br>" : "Die E-Mail " . $email . " entspricht nicht den Vorgaben. (a-z0-9@a-z0-9.a-z)" . "</br>";
    //return $check;
  }
  testFunction2("Hansel1","hanselherbert1@aol.de","Hans-Herbert1","1098712asd983");
}
?>