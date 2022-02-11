var timer = null;
var countdownNumber = 10;

var changestate = function(state){
	document.body.className = 'body-state' +state;
	clearInterval(timer);
	countdownNumber = 10;
	document.getElementById('countdown').innerHTML = countdownNumber;

	// countdown
	if (state == 2) {
		timer = setInterval( function () {
			countdownNumber = countdownNumber-1;
			document.getElementById('countdown').innerHTML = countdownNumber;
			
			if (countdownNumber <= 0) {
				changestate(3);
			};

		}, 500);
	} else if (state == 3){
		var success = setTimeout(function () {
				var randomNumber = Math.round(Math.random()*10)
				
				

				//success
				if (randomNumber > 2) {
					changestate(4);

				} else {
					changestate(5); // oh no!
					//do something else
				}

		}, 2000);
	};
}