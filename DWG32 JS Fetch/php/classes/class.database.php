<?php
class Dbconnect {
  private $connect;
  private $dbhost = 'localhost';

  public function __construct($dbname, $dbuser, $password) {
    try {
      $this->connect = new PDO("mysql:host=$this->dbhost;dbname=$dbname",$dbuser,$password);
      $this->connect->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    } catch(Exception $e) {
      throw new Exception($e->getMessage());
    }
  }

	private function prepareExecuteStatement($sql,$action) {
		try {
		$stmt = $this->connect->prepare($sql);
		$stmt->execute();
		echo "</br>";
		echo $action.'action successfully executed';
		echo "</br>";
		return $stmt;
		} catch(Exception $e) {
		throw new Exception($e->getMessage());
		}
	}

  public function selectTableData() {
    $sql = 'SELECT * FROM user;';
		echo "<h3>Select Data</h3>";
		echo 'Selecting Data with conditions.';
		echo "</br>";
    $result = $this->prepareExecuteStatement($sql,'Select-');

    return $result->fetchAll();
  }
}