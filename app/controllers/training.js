function goActivity(){
	var activity = Alloy.createController('navbar').getView();
	var navbar = Alloy.createController('activityFeed').getView();
	activity.open();
	navbar.open();
}

var a = Ti.UI.createAnimation({ 
	left: "100%",
	duration: 2000
});

var z = Ti.UI.createAnimation({ 
	left: 0,
	duration: 500
});

var x = Ti.UI.createAnimation({ 
	left: 0,
	duration: 4000
});

var complete = "false";
var countdown = 4;
var clickable = "true";
var broken = "false";
var buttonText = $.pusher;
var duration = 2000;
$.countdown.text = countdown;

var w = 0;
var t;

function progressBar(){ 
	t = setInterval( function() { 
		w++; 
		if(w >= 150){ 
			clearInterval(t); 
			// alert("Simulation is complete"); 
			} 
		$.timer.left = w; 
		}, 13 ); 
}

$.pusher.addEventListener('touchstart', function(e){ 
    if (clickable == "true") {
	    progressBar();
		duration = 2000;
		
		if (broken == "false") {
			setTimeout(function() {
			 if (broken == "false") {
				countdown -=1;				
				rest();
				$.countdown.text = countdown;
				clearInterval(t);
				w = 0;
				// alert('Countdown: '+ countdown);
			} else {
			    broken = "false";
			}
		},duration);
		} else {
			broken = "false";
		}
	}
}); 

$.pusher.addEventListener('touchend', function(e){
    if (clickable == "true") {
	    broken = "true";
	    duration = 0;
	    clearInterval(t); 
	    w = 0;
	    $.timer.left = 0;
    }
}); 

function rest() {
	$.timer.animate(x);
	clickable = "false";
	buttonText.text = "relax now...";
	
	setTimeout(function(){
		clickable = "true"; 
		completed = "false";
		broken = "false";
		buttonText = "press and squeeze";
		},4000);
}