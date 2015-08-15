<?php

	// Vérifie si l'utilisateur est authentifié en tant qu'admin, retourne true si oui, false si non
	function isAuth() {
		if(array_key_exists('authenticated', $_SESSION) && $_SESSION['authenticated'] === true) {
			return true;
		} else {
			return false;
		}
	}

?>