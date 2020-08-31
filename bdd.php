<?php 

$servername = 'localhost';
$username = 'root';
$password = 'root';


try{
    $conn = new PDO("mysql:host=$servername;dbname=exojs", $username, $password);

    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo 'Connexion réussie';
}

catch(PDOException $e){
  echo "Erreur : " . $e->getMessage();
}
