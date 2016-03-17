var win1 = $.first;
var win2 = Alloy.createController('walkthrough2').getView();
 
win1.addEventListener('click', function(e){
    // alert('You swiped to the '+e.direction);
    win2.open();
    win1.close();
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