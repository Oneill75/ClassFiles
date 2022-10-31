<pre>
<?php
ini_set("session.save_path",'G:\xampp\fi321sessions');
ini_set("session.use_strict_mode",'1');
// ini_set("session.use_cookies",'0');
ini_set("session.name",'FI321sess');
session_start();
$_SESSION['userid'] = '0815';
$_SESSION['pageid'] = '0001';
$_SESSION['uuid'] = uniqid();
$_SESSION['pw_hash'] = password_hash('test123',PASSWORD_DEFAULT);

echo 'Hallo Welt 1';
echo "<br>\n";
var_dump($_SESSION);
echo "<br>\n";
echo session_id();
echo "<br>\n";
echo uniqid();

?>
</pre>
<a href="session2.php" title="Session 2">Session 2</a>
<a href="session3.php" title="Session 3">Session 3</a>