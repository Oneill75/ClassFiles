<pre>
<?php
ini_set("session.save_path",'G:\xampp\fi321sessions');
ini_set("session.use_strict_mode",'1');
// ini_set("session.use_cookies",'0');
ini_set("session.name",'FI321sess');
session_start();
$_SESSION['pageid'] = '0003';
echo 'Hallo Welt 2';
echo "<br>\n";
session_abort();
var_dump($_SESSION);
echo "<br>\n";

session_id('abcABC123');
session_start();
echo session_id();
echo "<br>\n";
echo "<br>\n";

echo 'SID: ' . SID;
echo "<br>\n";
echo "<br>\n";

echo 'Cookie: ' . $_COOKIE['PHPSESSID'];
echo "<br>\n";
echo "<br>\n";

session_reset();
echo $_SESSION['pageid'];
echo "<br>\n";
echo "<br>\n";
?>
</pre>
<a href="session1.php" title="Session 1">Session 1</a>
<a href="session2.php" title="Session 2">Session 2</a>