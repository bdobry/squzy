function goTraining(){
	var training = Alloy.createController('training').getView();
	training.open();
}

function goSettings(){
	var settings = Alloy.createController('settings').getView();
	settings.open();
}

function goAbout(){
	var about = Alloy.createController('about').getView();
	about.open();
}