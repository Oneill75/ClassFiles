<?php
$user = "root";
$pass = "";
$sql = "SELECT * from user";
echo "<pre>\n";
try {
	$conn = new PDO('mysql:host=localhost;dbname=fi321', $user, $pass);
	/*	foreach ($conn->query($sql) as $row) {
		print_r($row);
	}
	$count = $conn->exec($sql);
	echo "$count Datensätze wurden gezählt\n";
*/


	/* 	Wie in der Aufgabe beschrieben, habe ich hier das preparedStatement ausgeführt,
 *	um alle Datensätze mit einer ID unter 6 und mit der Rolle Admin mit der Methode print_r() auszugeben.
 */
	$role = "Admin";
	$id = 6;
	$sth = $conn->prepare('SELECT username, id, role
		FROM user
		WHERE role = ? OR id < ?');
	$sth->execute(array($role, $id));
	while ($result = $sth->fetch(PDO::FETCH_ASSOC)) {
		print_r($result);
	}
	$conn = null;
} catch (PDOException $e) {
	print "Error!: " . $e->getMessage() . "<br/>";
	die();
}
echo "</pre>\n";



/*	Aufgabe 2: Über $count = $conn->exec($sql); werden keine SELECT resultate wiedergegeben.
 *	Deshalb ist die Ausgabe 0 Datensätze.
 *	
 *	3. PDO::query() wird für eine einmalige Ausführung genutzt.
 *	4. PDO::prepare() wird für Statements genutzt, die mehrmals ausgeführt werden sollen.
 *	5. PDOStatement::execute() wird für das Ausführen des PDO::prepare() benötigt.
 */


echo "<pre>\n";
echo "===== prepare, execute =====\n";
/*. 5.PDOStatement::execute https://www.php.net/manual/de/pdo.prepare.php */
    /* Execute a prepared statement by passing an array of values */
$sql = 'SELECT id, username, password, email
    FROM user
    WHERE id < :id AND role = :role';
    
try{
    
    $dbh = new PDO('mysql:host=localhost;dbname=fi321', $user, $pass);
    $sth = $dbh->prepare($sql);		#, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
    $sth->execute(array('id' => 2, 'role' => 'member'));
    $red = $sth->fetchAll();
	echo $red;



/* Array keys can be prefixed with colons ":" too (optional) */
$sth->execute(array(':id' => 3, ':role' => 'Admin'));
$yellow = $sth->fetchAll();
    //}
    $dbh = null;
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
/* ----------------------------------------------------------------------------- */
echo "</pre>\n";