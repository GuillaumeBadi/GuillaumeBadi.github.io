
$(document).ready(function () {
	$('.wrap').mousemove(function(e) {
		var x = (e.pageX * -1 / 2), y = (e.pageY * -1 / 2);
		$(this).css('background-position', x + 'px ' + y + 'px');
	});
});
