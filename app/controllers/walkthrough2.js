var login = $.loginWin;
var activityFeed = Alloy.createController('activityFeed').getView();

var newUser = "";
var newpassword = "";

function SetLogin()
{
	newUser = $.username.value;
	newpassword = $.password.value;
}

function CheckLogin()
{
	var UsernameText = $.username.value;
	var PassWordText = $.password.value;
	var correctPassword = "1";
	var correctUsername = "Test";
	
	if(
		(
			UsernameText.toLowerCase() == correctUsername.toLowerCase() && 
			PassWordText.toLowerCase() == correctPassword.toLowerCase()
		)
		||
		(
			newUser != "" &&
			UsernameText.toLowerCase() == newUser.toLowerCase() && 
			PassWordText.toLowerCase() == newpassword.toLowerCase())
		)
	{
		activityFeed.open();
	}
	else
	{
		$.label.text="login failed, please try again";
		$.label.color = "red"; 
	}
}