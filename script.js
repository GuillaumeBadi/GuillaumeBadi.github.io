
$(document).ready(function () {
	$('.wrap').mousemove(function(e) {
		var x = (e.pageX * -1 / 10), y = (e.pageY * -1 / 10);
		$(this).css('background-position', x + 'px ' + y + 'px');
	});
});
