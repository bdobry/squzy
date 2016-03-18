function GoWalkthrough() 
{
  var walkthrough1 = Alloy.createController('walkthrough1').getView();
  walkthrough1.open();
}
$.quote.opacity = 0;
$.quote.addEventListener('open', function(){
	var a = Ti.UI.createAnimation({
		opacity: 1,
	    duration:300,
	    curve:Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
	   }); 
	$.quote.animate(a);
});
