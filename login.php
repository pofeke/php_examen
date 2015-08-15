<?php
	// on démarre une session PHP
	session_start();

	require_once('php/admin.auth.php');

	// si l'utilisateur est déja authentifié en tant qu'admin
	if(isAuth()) {
		// on le redirige vers la page admin
		header('Location: admin.php');
		exit();
	}

	// on crée le tableau d'erreurs
	$errors = ['username' => [], 'password' => []];

	// si il y a pas eu requete post
	if(!empty($_POST)) {
		// on voit si les index username et password existent dans le tableau
		if(!array_key_exists('username', $_POST)) array_push($errors['username'], 'You must submit a username');
		if(!array_key_exists('password', $_POST)) array_push($errors['password'], 'You must submit a password');

		// si ils ne sont pas vides
		if(empty($errors['username']) && empty($errors['password'])) {
			// on check si ils sont corrects
			if($_POST['username'] != 'username') array_push($errors['username'], 'Votre utilisateur est incorrect');
			if($_POST['password'] != 'password') array_push($errors['password'], 'Votre mot de passe est incorrect');
			if(empty($errors['username']) && empty($errors['password'])) {
				// on authentifie l'utilisateur
				$_SESSION['authenticated'] = true;
				// et on le redirige
				header('Location: admin.php');
				exit();
			}
		}
	}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<title>Login Image Lover</title>

	<link rel="stylesheet" type="text/css" href="css/reset.css">
	<link rel="stylesheet" type="text/css" href="css/styles.css">
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,800,700,600' rel='stylesheet' type='text/css'>
</head>
<body class="login">
	<form action="login.php" method="POST">
		<div>
			<label for="username">Username:</label>
			<input type="text" id="username" name="username">
			<p>User : username</p>
			<?php 
				// on affiche les potentiels messages d'erreur
				if(array_key_exists('username', $errors)){
					foreach ($errors['username'] as $error) {
						echo '<span class="error">'.$error.'</span>';
					}
				}
			?>
		</div>
		<div>
			<label for="password">Password:</label>
			<input type="password" id="password" name="password">
			<p>MDP : password</p>
			<?php
				// on affiche les potentiels messages d'erreur
				if(array_key_exists('password', $errors)){
					foreach ($errors['password'] as $error) {
						echo '<span class="error">'.$error.'</span>';
					}
				}
			?>
		</div>
		<div>
			<input type="submit" value="Log In">
		</div>
	</form>
</body>
</html>