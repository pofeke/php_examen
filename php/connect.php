<?php

	// try {
	// 	$db = new PDO('mysql:host=localhost;dbname=arnaudpoffe_inthepocket;charset=utf8', 'arnaudpoffe', '', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
	// } catch (Exception $e) {
	// 	die('Error: '.$e->getMessage());
	// }


	try {
		$db = new PDO('mysql:host=localhost;dbname=arnaud;charset=utf8', 'root', 'root', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
	} catch (Exception $e) {
		die('Error: '.$e->getMessage());
	}

?>