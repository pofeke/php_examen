<?php
	require_once('connection.php');
	require_once('admin.auth.php');
	session_start();


	// si l'utilisateur est authentifié
	if(isAuth()) {
		// on prépare la suppression de l'image
		$statement = $db->prepare("DELETE FROM images WHERE id=:id");
		// on l'exécute
		$statement->execute([':id' => $_GET['image']]);
		// on redirige l'utilisateur
		header('Location: ../admin.php?user='.$_GET['user']);
	} else {
		// sinon, on l'informe qu'il n'est pas loggé
		echo "Seul l'administrateur peut supprimer les images.";		
		die();
	}

?>