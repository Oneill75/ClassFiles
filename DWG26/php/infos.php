<?php
  echo "Skript aufgerufen: " . date("d.m.Y H:i:s") . "</br>" . "</br>";
  echo "Die URL lautet: " . 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'] . "</br>" . "</br>";

  // if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
  //   $ip = $_SERVER['HTTP_CLIENT_IP'];
  // } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
  //   $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
  // } else {
  //   $ip = $_SERVER['REMOTE_ADDR'];
  // }
  // echo "IP: ". $ip. "</br>";
  // Dieser Codeschnipsel kam von https://stackoverflow.com/questions/3003145/how-to-get-the-client-ip-address-in-php
  // wird jedoch nicht genutzt

  echo "Ihre IP-Adresse lautet: " . $_SERVER['REMOTE_ADDR'] . "</br>" . "</br>";
  include 'getbrowser.php';
  echo "</br>" . "</br>"; 
  $betriebssystem = get_browser(null,true)["platform"];
  echo "Ihr Betriebsystem: " . $betriebssystem;
  $betriebssystemversion = get_browser(null,true)["platform_version"];
  echo " in Version: " . $betriebssystemversion . "</br>" . "</br>";
  $bitversion = get_browser(null,true)["browser_bits"];
  echo "Bit-Version: " . $bitversion  . "-bit" . "</br>" . "</br>"; 

  if ($bitversion == 64){
    if(preg_match('/win/i', $betriebssystem)){
      ?>
      <input type="button" value="Download für Windows 64-Bit">
      <?php
    } else if (preg_match('/linux/i', $betriebssystem)){
      ?>
      <input type="button" value="Download für Linux 64-Bit">
      <?php
    } else {
      ?>
      <input type="button" value="Download für Anderes Betriebssystem">
      <?php
    }
  } else if($bitversion == 32) {
    if(preg_match('/win/i', $betriebssystem)){
      ?>
      <input type="button" value="Download für Windows 32-Bit">
      <?php
    } else if (preg_match('/linux/i', $betriebssystem)){
      ?>
      <input type="button" value="Download für Linux 32-Bit">
      <?php
    } else {
      ?>
      <input type="button" value="Download für Anderes Betriebssystem">
      <?php
    }
  } else {
    ?>
    <p>Ihr System wird von unserer Software vermutlich nicht unterstützt.</p>
    <?php
  }

