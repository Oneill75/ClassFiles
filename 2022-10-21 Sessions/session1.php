<pre>
<?php
session_start();
$_SESSION['userid'] = '0815';
$_SESSION['pageid'] = '0001';

echo 'Hallo Welt 1';
echo "<br>\n";
var_dump($_SESSION);
echo "<br>\n";
echo session_id();

?>
</pre>
<a href="session2.php" title="Session 2">Session 2</a>
<a href="session3.php" title="Session 3">Session 3</a>