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
var countdown = 10;
var clickable = "true";
var broken = "false";
var buttonText = $.pusher.text;

$.countdown.text = countdown;

$.pusher.addEventListener('touchstart', function(e){
    if (clickable == "true") {
	    $.timer.animate(a);
	    
	    setTimeout(function(){
			 if (broken == "false") {
				countdown -=1;
				clickable = "false";
				rest();
				// alert('Countdown: '+ countdown);
				$.countdown.text = countdown;
			} else {
				broken = "false";
				complete = "false";
				clickable = "true";
			}
		},2000);
	} else {
		setTimeout(function(){
			clickable = "true"; 
		},500);
	}

}); 

$.pusher.addEventListener('touchend', function(e){
    if (clickable == "true") {
	    broken = "true";
	    clickable = "false";
	    $.timer.animate(z);    	
    }
}); 

function rest() {
	$.timer.animate(x);
	clickable = "false";
	buttonText = "relax now...";
	
	setTimeout(function(){
		clickable = "true"; 
		completed = "false";
		broken = "false";
		buttonText = "press and squeeze";
		},4000);
}