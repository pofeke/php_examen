<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<title>Login</title>

	<link rel="stylesheet" type="text/css" href="css/reset.css">
	<link rel="stylesheet" type="text/css" href="css/styles.css">
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,800,700,600' rel='stylesheet' type='text/css'>
</head>
<body class="home">

	<a href="login.php" class="admin">Admin</a>

<form action="php/upload.php" method="POST" enctype="multipart/form-data">

	<h1>L'anonyme de l'image</h1>

	<p>Uploader anonymement des images et partagez-les avec le monde entier. Ecrivez simplement un texte mettez une image et le tour est joué. Laissez juste la magie s'opérer.</p>

	<div>
		<label for="caption">Votre texte :</label>
		<input type="text" id="caption" name="caption" placeholder='Votre texte'>
	</div>
	<div>
		<label for="image">Image:</label>
		<input type="file" id="image" name="image">
	</div>
	<div>
		<input type="submit" value="Envoyer">
	</div>
</form>

<a href="gallery.php" class="discover">Découvrez les autres anonymes</a>
	
</body>
</html>