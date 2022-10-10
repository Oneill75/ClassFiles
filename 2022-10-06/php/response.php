<?php
echo "<pre>";
// $POST,$GET,$SERVER
print_r($_FILES);


$arrNameLength = count($_FILES['files']['name']);
$uploadFolder = '../fileuploads/';

for ($i=0; $i < $arrNameLength; $i++) { 
  $fileName = $_FILES['files']['name'][$i];
  $uploadFrom = $_FILES['files']['tmp_name'][$i];
  move_uploaded_file($uploadFrom, $uploadFolder . $fileName);
}

echo "</pre>";