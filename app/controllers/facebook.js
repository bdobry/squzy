function goFacebook(){
	var activity = Alloy.createController('navbar').getView();
	var navbar = Alloy.createController('activityFeed').getView();
	activity.open();
	navbar.open();
}