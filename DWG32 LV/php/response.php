<?php
$dataForJSON = ['response' => 'ok'];
// https://www.php.net/manual/en/function.empty.php
if(!empty($_POST)) {
	// https://www.php.net/manual/en/function.isset.php
	if(isset($_POST['username'])) {
		$username = htmlspecialchars($_POST['username']);
	}
	if(isset($_POST['password'])) {
		$password = htmlspecialchars($_POST['password']);
	}
	// ?? - null coalescing operator
	// https://www.php.net/manual/en/language.operators.comparison.php#language.operators.comparison.coalesce
	$submit = $_POST['submit'] ?? htmlspecialchars($_POST['submit']);
} else { // empty $_POST
	// https://www.php.net/manual/en/function.die.php
	// https://www.php.net/manual/en/function.exit.php
	// https://www.php.net/manual/en/function.json-encode.php
	die(json_encode(['response' => 'failed']));		// stops the script execution if $_POST is empty
}

// https://www.php.net/manual/en/function.isset.php
// "If multiple parameters are supplied then isset() will return true only
// if all of the parameters are considered set.
// Evaluation goes from left to right and stops as soon as an unset variable is encountered."
if(isset($username, $password, $submit)) {
	if($submit === 'Login') {
		try {
			$conn = new PDO('mysql:host=localhost;dbname=fi321;', 'root', '');
		} catch (Throwable $t) { // catches fatal errors, https://www.php.net/manual/en/class.throwable.php
			exit(json_encode(['failure' => $t->getCode()]));
		}
		$sql = 'SELECT id, username, password, email, active, role FROM user WHERE username=:username LIMIT 1';
		$stm = $conn->prepare($sql);
		$stm->execute([':username' => $username]);
		$res = $stm->fetch(PDO::FETCH_ASSOC);
		
		$stm = null;
		$conn = null;

		if($res === false) { // wrong e-mail
			exit(json_encode(['response' => 'failed']));
		} else {
			if(password_verify($password, $res['password'])) {
				$dataForJSON = [
					'id' => $res['id'],
					'username' => $res['username'],
					'email' => $res['email'],
					'active' => $res['active'],
					'role' => $res['role']
				];
				sessionInit();
				echo json_encode(array_merge($dataForJSON, returnSessionInfo(), ['submit' => $submit]));
			} else { // wrong password
				exit(json_encode(['response' => 'failed']));
			}
		}
	} else { // if there is something different in $submit
		die(json_encode(['response' => 'failed']));
	} 
} else if(isset($submit)) {
	if($submit === 'Logout') {
		sessionInit();
		sessionDestroy();
		echo json_encode(array_merge(returnSessionInfo(), ['submit' => $submit]));
	} else { // if there is something different in $submit
		die(json_encode(['response' => 'failed']));
	}
} else {
	die(json_encode(['response' => 'failed']));
}

/** Function to set session variables, options and to start a new session. */
function sessionInit() {
	// https://www.php.net/manual/en/session.examples.basic.php
	// https://www.php.net/manual/en/session.configuration.php
	ini_set('session.cookie_samesite', 'strict');
	ini_set('session.save_path', 'C:\xampp\fi321.local.sessions');
	ini_set('session.name', 'FI321KEKS'); // or use https://www.php.net/manual/en/function.session-name.php, also see below
	// https://www.php.net/manual/en/function.session-id.php, also see below
	session_id('0-9,A-Z,a-z'); // ',', '-', 0-9, A-Z, a-z allowed only
	// https://www.php.net/manual/en/function.session-status.php, also see below
	// return vaues
	// 0 - PHP_SESSION_DISABLED if sessions are disabled.
	// 1 - PHP_SESSION_NONE if sessions are enabled, but none exists.
	// 2 - PHP_SESSION_ACTIVE if sessions are enabled, and one exists.
	// if(session_status() !== PHP_SESSION_ACTIVE) {
		session_start();
	// }
}

/** Function to destroy all data registered to this session, store the session data and end the session. */
function sessionDestroy() {
	// https://www.php.net/manual/en/function.session-destroy.php
	$_SESSION = [];
	session_destroy();
	// https://www.php.net/manual/en/function.session-write-close.php
	session_write_close();
	// https://www.php.net/manual/en/function.setcookie.php
	setcookie(session_name(),'', ['expires' => 0, 'samesite' => 'strict']); // The setcookie() function must appear before the <html> tag?
}

/** Function to return an array with information (status, id, name) from the ongoing session. 
 * 
 * @return array
*/
function returnSessionInfo() {
	return [
		// https://www.php.net/manual/en/function.session-status.php
		'session_status' => session_status(),
		// https://www.php.net/manual/en/function.session-id.php
		'session_id' => session_id(),
		// https://www.php.net/manual/en/function.session-name.php
		'session_name' => session_name(),
	];
}
