
function closeWindow(e) {
    Alloy.Globals.ctr--;
    Alloy.Globals.navwindow.closeWindow($.training);
}
$.training.title = "Window #" + Alloy.Globals.ctr;
$.windowNumber.text = "I'm window #" + Alloy.Globals.ctr + " on the stack";
