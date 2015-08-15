<?php
	require_once('php/connection.php');
	require_once('php/image.get.php');
?>

<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<title>Gallery Image Lover</title>

	<link rel="stylesheet" type="text/css" href="css/reset.css">
	<link rel="stylesheet" type="text/css" href="css/styles.css">
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,800,700,600' rel='stylesheet' type='text/css'>
</head>
<body class="login">

	<a href="login.php" class="admin">Admin</a>
	<a href="index.php" class="upload">Upload maintenant</a>

	<div id="gallery">

		<h1>Gallery des anonymes</h1>
	<?php
		// Si l'index d'une image n'est pas passé
		if(!array_key_exists('image', $_GET)) {
			// on prend toutes les images
			$images = getImages($db);
			$imageCount = 0;
			// si le tableau n'est pas vide
			if($images) {
				// on les affiche toutes
				foreach ($images as $image) {				
					echo '<a href="gallery.php?image='.$imageCount.'"><img src="images/'.$image['name'].'"></a>';
					$imageCount++;
				}
			} else {
				// sinon on affiche pas d'images
				echo 'no images. :(';
			}
		// si l'index d'une image est passé
		} else {
			// On prend toute les images
			$images = getImages($db);
			// on affiche celle avec l'index voulu
			if(array_key_exists($_GET['image'], $images)) {
				if($_GET['image'] > 0) echo '<a href="gallery.php?image='.($_GET['image']-1).'"class="next previous">Image précédente</a>';
				$image = $images[$_GET['image']];
				echo '<img src="images/'.$image['name'].'">';
				if($_GET['image'] < count($images) - 1) echo '<a href="gallery.php?image='.($_GET['image']+1).'"class="next">Image suivante</a>';
			} else {
				// sinon on affiche que cette image n'existe pas
				echo "No such image.";
			}
		}
	?>

	</div>
</body>
</html>