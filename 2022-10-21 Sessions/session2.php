<pre>
<?php
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