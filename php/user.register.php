<?php

	// enregistre un utilisateur dans la db
	function registerUser($ip, $db) {
		$userId;
		$statement = $db->query("SELECT * FROM uploaders WHERE ip='$ip' LIMIT 1");
		$user = $statement->fetch(PDO::FETCH_ASSOC);
		echo '<br>';
		if(!$user) {
			try {
				$query = $db->prepare("INSERT INTO uploaders (ip) VALUES (:ip)");
				$success = $query->execute([':ip' => $ip]);
				var_dump($success);
				$userId = $db->lastInsertId();
			} catch(PDOException $e) {
				echo 'Error inserting uploader: ' . $e->getMessage() . '<br>';
			}
		} else {
			$userId = $user['id'];
		}
		return $userId;
	}

?>