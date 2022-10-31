<pre>
<?php
ini_set("session.save_path",'G:\xampp\fi321sessions');
ini_set("session.use_strict_mode",'1');
// ini_set("session.use_cookies",'0');
ini_set("session.name",'FI321sess');
session_start();
$_SESSION['pageid'] = '0002';
echo 'Hallo Welt 2';
echo "<br>\n";

var_dump($_SESSION);
echo "<br>\n";

echo session_id();
echo "<br>\n";
echo "<br>\n";

?>
</pre>
<a href="session1.php" title="Session 1">Session 1</a>
<a href="session3.php" title="Session 3">Session 3</a>