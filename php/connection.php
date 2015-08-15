<?php

	// se connecte à la db en utilisant PDO

	$pdoCfg = [
		'dsn' => 'mysql:dbname=arnaudpoffe_imagelover;host=localhost',
		'username' => 'arnaudpoffe',
		'password' => ''
	];

	try {
		$db = new PDO($pdoCfg['dsn'], $pdoCfg['username'], $pdoCfg['password']);
	} catch(PDOException $e) {
		echo 'Database connection failed: ' . $e->getMessage() . '<br>';
		die();
	}

?>