var view = Ti.UI.createView({

});

var btn1 = Ti.UI.createButton({
    title :'M',
    right : 0,
    width : 30,
    height : 30
});
var btn2 = Ti.UI.createButton({
    title :'+',
    right : 30,
    width : 30,
    height : 30
});
view.add(btn1);
view.add(btn2);

$.win2.setRightNavButton(view);
