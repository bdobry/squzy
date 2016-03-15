var win3 = $.third;
var win4 = Alloy.createController('activityFeed').getView();
 
win3.addEventListener('swipe', function(e){
    // alert('You swiped to the '+e.direction);
    win4.open();
}); 
 
   
// win1.addEventListener('swipe', function(e){
    // // alert('You swiped to the '+e.direction);
//     
    // var anim1 = Ti.UI.createAnimation({
        // left: "-100%",
        // duration: 1000
    // });
    // var anim2 = Ti.UI.createAnimation({
        // left: 0,
        // duration: 1000
    // });
    // win2.open(anim2); 
// });