var win3 = $.third;
var win4 = Alloy.createController('activityFeed').getView();

var navWindow = Alloy.createController('navbar').getView();


win3.addEventListener('click', function(e){
    // alert('You swiped to the '+e.direction);
    navWindow.open();
    win4.open();
}); 
 
   
win3.addEventListener('swipe', function(e){
    if (e.direction == "left") {
    	alert('You swiped to the '+e.direction);
    } else if (e.direction == "right") {
    	alert('You swiped to the '+e.direction);
    }
    
});