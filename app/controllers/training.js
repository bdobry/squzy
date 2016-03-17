function goActivity(){
	var activity = Alloy.createController('navbar').getView();
	var navbar = Alloy.createController('activityFeed').getView();
	activity.open();
	navbar.open();
}
 

function animWidth() {
	var a = Ti.UI.createAnimation({ 
    	left: "100%",
    	duration: 1000
	});
	
	$.timer.animate(a);
}
