function goActivity()
{
	var activity = Alloy.createController('navbar').getView();
	var navbar = Alloy.createController('activityFeed').getView();
	activity.open();
	navbar.open();
}


function goTraining()
{
	var training = Alloy.createController('training').getView();
	training.open();
}


function goMyAccount()
{
	var myAccount = Alloy.createController('myAccount').getView();
	myAccount.open();
}

function goPremium()
{
	var premium = Alloy.createController('premium').getView();
	premium.open();
}

function goFacebook()
{
	var facebook = Alloy.createController('facebook').getView();
	facebook.open();
}

function goUnits()
{
	var units = Alloy.createController('units').getView();
	units.open();
}

function goNotifications()
{
	var notifications = Alloy.createController('notifications').getView();
	notifications.open();
}

function goPrivacy()
{
	var privacy = Alloy.createController('privacy').getView();
	privacy.open();
}

function goFaq()
{
	var faq = Alloy.createController('faq').getView();
	faq.open();
}

function goContact()
{
	var contact = Alloy.createController('contact').getView();
	contact.open();
}

