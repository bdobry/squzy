$.index.addEventListener('open', function(){
	setTimeout(function(){
			var quote = Alloy.createController('quote').getView();
			quote.open();
		},2000);
	
	
});

$.index.open();