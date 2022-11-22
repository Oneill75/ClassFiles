<?php
  require 'inc/function.inc.php';
  echo "teeeeeeeeeeest";
  // $db = get_database();
  if(isset($_POST['submit'])){
    // Fetching variables of the form which travels in URL
    $username = $_POST['Username'];
    $password = $_POST['Password'];
    $email = $_POST['Email'];
    $fname = $_POST['Firstname'];
    $lname = $_POST['Lastname'];
  if($username !=''&& $email !=''&& $password !=''&& $lname !=''&& $fname !='')
    {
      //  To redirect form on a particular page
      header("Location:http://istmeins.local/Projekt%20Web%20Waschzettel/Kalkhoff_Projekt/");
      echo "test";
    }else{
      ?><span><?php echo "Please fill all fields.....!!!!!!!!!!!!";?></span> <?php
    }
  }
  // $test = password_hash($_POST["Password"],PASSWORD_BCRYPT);
?> 