var menuButton = $.menuButton;

var a = Ti.UI.createAnimation({
	left:150,
    duration:300,
    curve:Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
});

var z = Ti.UI.createAnimation({
	left:0,
    duration:300,
    curve:Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
});
var main = $.mainNav;

menuButton.addEventListener('click', function(e){
    // If the menu is opened
    if (e.source.toggle == false){
        e.source.toggle = true;
        main.animate(a);
    } else { 
        e.source.toggle  = false;
        main.animate(z);  
    }
});

function goTraining(){
	var training = Alloy.createController('training').getView();
	training.open();
}

main.addEventListener('touchstart', function(e){
    // Get starting horizontal position
    e.source.axis = parseInt(e.x);
});

main.addEventListener('touchmove', function(e){
    // Subtracting current position to starting horizontal position
    var coordinates = parseInt(e.globalPoint.x) - e.source.axis;
    // Detecting movement after a 20px shift
    if(coordinates > 20 || coordinates < -20){
        e.source.moving = true;
        alert('You swiped to the '+e.direction);
    }
    // Locks the window so it doesn't move further than allowed
    if(e.source.moving == true && coordinates <= 150 && coordinates >= 0){
        // This will smooth the animation and make it less jumpy
        menuButton.animate(a);
        // Defining coordinates as the final left position
        menuButton.left = coordinates;
    }
});