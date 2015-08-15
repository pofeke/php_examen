<?php

	// retourne tous les utilisateurs présents dans la db ou false si il n'y en a pas
	function getUsers($db) {
		$statement = $db->query('SELECT * FROM uploaders');
		$users = $statement->fetchAll(PDO::FETCH_ASSOC);

		if(empty($users))
			return false;
		else
			return $users;
	}

	// retourne un utilisateur selon son ID
	function getUser($db, $userId) {
		$statement = $db->prepare("SELECT * FROM uploaders WHERE id=:id");
		$statement->execute([':id' => $userId]);
		$user = $statement->fetchAll(PDO::FETCH_ASSOC);
		$user = $user[0];
		return $user;
	}

?>