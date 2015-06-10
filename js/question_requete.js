(function(window, document, undefined) {

	var view = document.getElementById('question-view');
	var button;
	var template = _.template(document.getElementById('question-view-template').innerHTML);

	var myTimer = window.setInterval(getQuestion, 40000);
	var count = 0;
	var countQuestion = 0;

	function getQuestion() {

		countQuestion ++;

		$('#countdown').remove();
		$("#send-button").remove();

		var xhr = new XMLHttpRequest();


		xhr.onreadystatechange = function() {
			if(xhr.readyState === 4 && xhr.status === 200) {
				var data = JSON.parse(xhr.responseText);
				renderView(data);	
			}
		
			$('.count').text(countQuestion);


			$('#countdown').ClassyCountdown({
		    theme: "white-very-wide",
		    end: $.now() + 40,
			});

		};

		xhr.open('GET', 'php/question.php', true);
		xhr.send();

		function renderView(data) {
			var markup = template({model: data});
			view.innerHTML = markup;
			button = document.getElementById('send-button');

			button.addEventListener('click', getQuestion);
			clearInterval(myTimer);
			myTimer = setInterval(getQuestion, 40000);
		}

		count ++;

		if (count == 11) {
			window.location.href = "resultat.html";
		};

	};

	$('.go').click(function(){
		$( ".tempory" ).fadeOut( 400, function() {
	    	$(this).remove();
	    	getQuestion();
	  });
	});

	 

})(window, document);

