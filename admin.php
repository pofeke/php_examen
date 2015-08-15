<?php

	session_start();

	require_once('php/connection.php');
	require_once('php/user.get.php');
	require_once('php/image.get.php');
	require_once('php/admin.auth.php');

	// Vérifier si l'utilisateur est authentifié en tant qu'admin
	if(!isAuth()) {
		echo "Oh oh tu ne devrais pas être la.";
		die();
	} 

?>

<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<title>Admin Image Lover</title>

	<link rel="stylesheet" type="text/css" href="css/reset.css">
	<link rel="stylesheet" type="text/css" href="css/styles.css">
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,800,700,600' rel='stylesheet' type='text/css'>
</head>
<body class="login">

	<a href="admin.php" class="upload">retour user</a>
	<a href="index.php" class="admin">Home</a>
	<a href="php/admin.logout.php" class="logout">Se déconnecter</a>
	<div class="content">
		<?php

			// Si il n'y a pas d'uploader sélectionné
			if(!array_key_exists('user', $_GET)) {
				// On demande à l'utilisateur d'en choisir un
				echo "<h1>Choisissez un utilisateur.<h1>";
			} else {
				// on va cherche notre uploader dans la db
				$user = getUser($db, $_GET['user']);
				// si il n'existe pas
				if(empty($user)) {
					// on en informe l'utilisateur
					echo "Pas d'utilisateur.";
				} else {
					// sinon on va cherche ses images dans la db
					$userImages = getImagesFromUser($db, $_GET['user']);
					// si pas d'images
					if(empty($userImages)){
						// on en informe l'utilisateur
						echo "<h2>Cet utilisateur n'a pas d'images<h2>";
					} else {
						// sinon, on affiche les images
						$markup = '';
						$markup .= "<h2>Images pour l'utilisateur avec IP".$user['ip'].'</h2>';
						foreach ($userImages as $image) {
							$markup .= '<div>';
							$markup .= '<img src="images/'.$image['name'].'">';
							$markup .= '<p>Added on '.$image['uploaded_at'].'</p>';
							$markup .= '<a href="php/image.delete.php?image='.$image['id'].'&user='.$user['id'].'">Delete</a>';
							$markup .= '</div>';
						}
						echo $markup;
					}
				}
			}

		?>
	</div>
		<div class="sidebar">
		<?php
			$markup;
			// On va cherche la liste de tous les utilisateurs dans la db
			$users = getUsers($db);
			// si pas
			if(!$users) {
				// on en notifie l'utilisateur
				$markup = "Pas d'utilisateur enregistrés :(";
			} else {
				// sinon, on print chaque utilisateur à l'écran
				$markup = '<ul>';
				foreach ($users as $user) {
					$markup .= '<a href="admin.php?user='.$user['id'].'">' . $user['ip'] . '</a>';
				}
				$markup .= '</ul>';
			}

			echo $markup;
		?>
	</div>
</body>
</html>