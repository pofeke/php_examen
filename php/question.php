<?php

	require_once 'connect.php';
	
	$random_id = rand(1,10);
	$questions_response = $db->query("SELECT * FROM questions WHERE idquestions=$random_id");

	$question = $questions_response->fetch(PDO::FETCH_ASSOC);

	$pk = $question['idquestions'];

	$answers_response = $db->query("SELECT * FROM answers WHERE question_fk=$pk");
	$answers = [];

	while($row = $answers_response->fetch(PDO::FETCH_ASSOC)) {
		array_push($answers, $row);
	}

	shuffle($answers);

	
	$data = array(
		'question' => $question,
		'answers' => $answers
	);
	
	$json_response = json_encode($data, JSON_UNESCAPED_UNICODE);

	$headers = 'Content-Type: application/json';

	echo $json_response;

?>
