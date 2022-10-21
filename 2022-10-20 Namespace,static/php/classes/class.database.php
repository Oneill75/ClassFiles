<?php
class Dbconnect {
  private $connect;
  private $dbhost = 'localhost';
  private $dbname = 'fi321';
  private $dbuser = 'root';
  private $dbpass = '';
 
  public function __construct($dbname, $dbuser, $password) {
    try {
      $this->connect = new PDO("mysql:host=$this->dbhost;dbname=$dbname",$dbuser,$password);
      $this->connect->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    } catch(Exception $e) {
      throw new Exception($e->getMessage());
    }
  }

  public function createTable($tablename,$options) {
    $sql = 'CREATE TABLE IF NOT EXISTS '.$tablename.' '.$options.';';
    $stmt = $this->connect->prepare($sql);
    $stmt->execute();
  }

  public function insertTableData($tablename,$values) {
    $sql = 'INSERT INTO '.$tablename.' VALUES ('.$values.');';
    $stmt = $this->connect->prepare($sql);
    $stmt->execute();
  }

  public function updateTableData($tablename,$values,$options) {
    $sql = 'UPDATE '.$tablename.' SET '.$values.' '.$options.';';
    $stmt = $this->connect->prepare($sql);
    $stmt->execute();
  }
  
  public function deleteTableData($tablename,$options) {
    $sql = 'DELETE FROM '.$tablename.' '.$options.';';
    $stmt = $this->connect->prepare($sql);
    $stmt->execute();
  }

  public function selectTableData($tablename, $columns, $options) {
    $sql = 'SELECT '.$columns.' FROM '.$tablename.' '.$options.';';
    $stmt = $this->connect->prepare($sql);
    $stmt->execute();

    return $stmt->fetchAll();
  }

  public function deleteTable($tablename) {
    $sql = 'DROP TABLE IF EXISTS '.$tablename.';';
    $stmt = $this->connect->prepare($sql);
    $stmt->execute();
  }

}