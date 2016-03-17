var win1 = $.first;
var win2 = Alloy.createController('walkthrough2').getView();
var one = $.one;
var two = $.two;
var three = $.three;
var four= $.four;


function goLogin() 
{
 	alert('asas');
	win2.open();
	win1.close();
}

var screen = 1;
$.addClass($.uno, 'active');

win1.addEventListener('swipe', function(e){
	var outL = Ti.UI.createAnimation({
		left:-500,
	    duration:300,
	    curve:Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
	   }); 
	var inT = Ti.UI.createAnimation({
		opacity: 1,
	    duration:500,
	    curve:Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
	});
	
	var inR = Ti.UI.createAnimation({
		left:0,
		duration:500,
		curve:Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
	});
	var outT = Ti.UI.createAnimation({
		opacity: 0,
	    duration:200,
	    curve:Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
	});
	
	if (e.direction == "left") {
		if (screen == 1) {
			one.animate(outL);
			two.animate(inT);
			$.resetClass($.uno, 'indicator');
			$.addClass($.dos, 'active');
		} else if (screen == 2) {
			two.animate(outL);
			three.animate(inT);
			$.resetClass($.dos, 'indicator');
			$.addClass($.tres, 'active');
		} else if (screen == 3) {
			three.animate(outL);
			four.animate(inT);
			$.resetClass($.tres, 'indicator');
			$.addClass($.quatro, 'active');
		} else if (screen == 4) {
			four.animate(outL);
			win2.open();
			win1.close();
		} 
		screen++;
		// alert('screen'+screen);
	} else if (e.direction == "right") {
		if (screen == 1) {

		} else if (screen == 2) {
			one.animate(inR);
			two.animate(outT);
			$.resetClass($.dos, 'indicator');
			$.addClass($.uno, 'active');
		}  else if (screen == 3) {
			two.animate(inR);
			three.animate(outT);
			$.resetClass($.tres, 'indicator');
			$.addClass($.dos, 'active');
		} else if (screen == 4) {
			three.animate(inR);
			four.animate(outT);
			$.resetClass($.quatro, 'indicator');
			$.addClass($.tres, 'active');
		}
		screen = screen -1;
		// alert('screen'+screen);
	}
    
});
