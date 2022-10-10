<?php
$user = "root";
$pass = "";
$stm = "SELECT * from user";
echo "<pre>\n";
try {
	$dbh = new PDO('mysql:host=localhost;dbname=fi321', $user, $pass);
/*	foreach ($dbh->query($stm) as $row) {
		print_r($row);
	}
	$count = $dbh->exec($stm);
	echo "$count Datensätze wurden gezählt\n";
*/	


/* 	Wie in der Aufgabe beschrieben, habe ich hier das preparedStatement ausgeführt,
 *	um alle Datensätze mit einer ID unter 6 und mit der Rolle Admin mit der Methode print_r() auszugeben.
 */
	$role = "Admin";
	$id = 6;
	$sth = $dbh->prepare('SELECT username, id, role
		FROM user
		WHERE role = ? OR id < ?');
	$sth->execute(array($role, $id));
	while($result = $sth->fetch(PDO::FETCH_BOTH)){
		print_r($result);
	}
	$dbh = null;
} catch (PDOException $e) {
	print "Error!: " . $e->getMessage() . "<br/>";
	die();
}
echo "</pre>\n";



/*	Aufgabe 2: Über $count = $dbh->exec($stm); werden keine SELECT resultate wiedergegeben.
 *	Deshalb ist die Ausgabe 0 Datensätze.
 *	
 *	3. PDO::query() wird für eine einmalige Ausführung genutzt.
 *	4. PDO::prepare() wird für Statements genutzt, die mehrmals ausgeführt werden sollen.
 *	5. PDOStatement::execute() wird für das Ausführen des PDO::prepare() benötigt.
 */
