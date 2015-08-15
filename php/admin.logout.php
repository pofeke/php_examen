<?php
	
	session_start();

	$_SESSION['authenticated'] = false;	
	header('Location: http://arnaudpoffe.be/php/index.php');  

?>