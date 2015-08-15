<?php

	// enregistre une image dans la db, retourne true si ça a marché, false si pas
	function registerImage($image, $userId, $db) {
		$imageName = $image->file_dst_name_body.'.'.$image->file_dst_name_ext;
		$date = date("Y-m-d H:i:s");
		try {
			$statement = $db->prepare("INSERT INTO images (name, fk_uploader, uploaded_at) VALUES (:name, :fk_uploader, :uploaded_at)");
			$statement->execute([':name' => $imageName, ':fk_uploader' => $userId, ':uploaded_at' => $date]);
			return true;
		} catch(PDOException $e) {
			echo "Error registering the image: " . $e->getMessage();
			return false;
		}
	}

?>