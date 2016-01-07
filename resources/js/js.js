function Load(){
    window.open("main.html");
}

	var deg = Math.floor((Math.random() * 1000) + 100);
    $("#start").on('click', function() {
        $('#wheel').css({
			'-webkit-transform': 'rotate('+100+'deg)',
			/*'-moz-transform': 'rotate('+deg+'deg)',
			'-ms-transform': 'rotate('+deg+'deg)',
			'-o-transform': 'rotate('+deg+'deg)',
			'transform': 'rotate('+deg+'deg)'*/
			
        });
        deg-=40;
		
		
    });
	
