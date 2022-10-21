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

  public function createTable($tablename,$options) {
    $sql = 'CREATE TABLE IF NOT EXISTS '.$tablename.' '.$options.';';
		echo "<h3>Create Table</h3>";
		echo 'Creating table ('.$tablename.').';
		echo "</br>";
    $this->prepareExecuteStatement($sql,'Create-');
  }

  public function insertTableData($tablename,$values) {
    $sql = 'INSERT INTO '.$tablename.' VALUES ('.$values.');';
		echo "<h3>Insert Data</h3>";
		echo 'Inserting ('.$values. ') into Table ('.$tablename.').';
		echo "</br>";
    $this->prepareExecuteStatement($sql,'Insert-');
  }

  public function updateTableData($tablename,$values,$options) {
    $sql = 'UPDATE '.$tablename.' SET '.$values.' '.$options.';';
		echo "<h3>Update Data</h3>";
		echo 'Updating Data with condition ('.$options. ') in Table ('.$tablename. ') to ('.$values.').';
		echo "</br>";
    $this->prepareExecuteStatement($sql,'Update-');
  }
  
  public function deleteTableData($tablename,$options) {
    $sql = 'DELETE FROM '.$tablename.' '.$options.';';
		echo "<h3>Delete Data</h3>";
		echo 'Deleting Data with condition ('.$options. ') in Table ('.$tablename. ').';
		echo "</br>";
    $this->prepareExecuteStatement($sql,'Delete-');
  }

  public function selectTableData($tablename, $columns, $options) {
    $sql = 'SELECT '.$columns.' FROM '.$tablename.' '.$options.';';
		echo "<h3>Select Data</h3>";
		echo 'Selecting Data with condition ('.$columns. ') in Table ('.$tablename. ') with options ('.$options.').';
		echo "</br>";
    $this->prepareExecuteStatement($sql,'Select-');

    // return $stmt->fetchAll();
  }

  public function deleteTable($tablename) {
    $sql = 'DROP TABLE IF EXISTS '.$tablename.';';
		echo "<h3>Drop Table</h3>";
		echo 'Dropping Table ('.$tablename. ').';
		echo "</br>";
    $this->prepareExecuteStatement($sql,'Drop table-');
  }
}