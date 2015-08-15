<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<title>Login</title>

	<link rel="stylesheet" type="text/css" href="../css/reset.css">
	<link rel="stylesheet" type="text/css" href="../css/styles.css">
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,800,700,600' rel='stylesheet' type='text/css'>
</head>
<body class="login">

	<a href="../login.php" class="admin">Admin</a>

<div class="succeed">
	
	<?php

		require_once('connection.php');
		require_once('class.upload.php');
		require_once('user.register.php');
		require_once('image.register.php');

		// On initialise nos variables
		$errors = [];
		$ip = $_SERVER['REMOTE_ADDR'];
		$caption;
		$image;

		// Réengeristrement de l'image UP

		// Vérification de l'image

		if(!array_key_exists('image', $_FILES)) {
			if(!array_key_exists('image', $_FILES)) array_push($errors, "<p>Oh oh ce n'est pas une pas image valide, veuillez recommencer.</p>");
		} else {
			if($_FILES['image']['size'] >= 5000000) array_push($errors, "<p>Votre fichier doit faire maximum 5Mb, veuillez recommencer.</p>");
		}

		// Vérification du caption
		
		if(!array_key_exists('caption', $_POST) || $_POST['caption'] === " " || $_POST['caption'] === "") {
			array_push($errors, "<p>Veuillez remplir tous les champs. Nous sommes pas si anonymes que ça.</p>");
		} else {
			$caption = trim(strip_tags($_POST['caption']));
		}

		// class UPLOAD

		if(empty($errors)) {
			$caption = $_POST['caption'];
			$image = new upload($_FILES['image']);
			$imageName = uniqid('', true);
			if ($image->uploaded) {
				$image->file_new_name_body = $imageName;
				$image->image_text = $caption;
				$image->image_text_background = '#000000';
				$image->image_resize   = true;
				$image->image_ratio_y  = true;
				$image->image_x        = 800;
			    $image->process('../images');
			    if ($image->processed) {
			        $userId = registerUser($ip, $db);
			        if($userId) {
			        	$imageRegistered = registerImage($image, $userId, $db);
			        	if($imageRegistered) {
			        		echo "<div class='ok'><p>Tu fais partie de la bande maintenant.</p><p><span>L'image est correctement uploadée</span></p><a href='../index.php'>Recommencer</a><a href='../gallery.php'>Voir les autres anonymes</a></div>";
			        	}
			        }
			        $image->clean();
			    } else {
			        echo 'error : ' . $image->error;
			    }
			}
		} else {
			echo 'Error(s) happened:<br>';
			foreach ($errors as $key => $value) {
				echo $value.'<br>';
			}
		}

	?>

</div>

</body>
</html>
