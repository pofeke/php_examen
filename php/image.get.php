<?php

	// Va cherche toutes les images de la db, retourne un tableau d'images ou false si il n'y en a pas
	function getImages($db) {
		$statement = $db->query('SELECT * FROM images');
		$images = $statement->fetchAll(PDO::FETCH_ASSOC);

		if(empty($images))
			return false;
		else
			return $images;
	}

	// Va chercher toutes les images d'un utilisateur, retourne un tableau d'images ou false si il n'y en a pas 
	function getImagesFromUser($db, $userId) {
		$statement = $db->prepare("SELECT * FROM images WHERE fk_uploader=:userId");
		$statement->execute([':userId' => $userId]);
		$images = $statement->fetchAll(PDO::FETCH_ASSOC);

		if(empty($images)) {
			return false;
		} else {
			return $images;
		}
	}

?>