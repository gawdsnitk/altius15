(function(d, w, $) {
    var documentObject = $(d),
	    windowObject = $(w),
	    windowHeight = windowObject.height(),
	    id, i,//i is the integral part of id
	    isEventDetailsVisible = false;
	var toggleEventDetails = function() {
		if(isEventDetailsVisible == false) {
			isEventDetailsVisible = true;
			$('#eventsTypes').css('transform', 'translateX(-150%)');
			$('#eventsDetails').css('transform', 'translateX(-150%)');
		}
		else {
			isEventDetailsVisible = false;
			$('#eventsTypes').css('transform', 'translateX(0%)');
			$('#eventsDetails').css('transform', 'translateX(0%)');
		}
	}
	documentObject.on('ready', function() {
        $('.chico').hover(function(event) {
        	id = event.target.id;
        	i = id[5];
        	$('#' + id).css({'transform':'scale(1)', 'opacity': 1});
        	$('#event' + i + ' .rear').css('transform','scale(1)');
        }, function() {
        	$('#' + id).css({'transform':'scale(1.2)', 'opacity': 0});
        	$('#event' + i + ' .rear').css('transform','scale(1.2)');
        });

        $('.chico').click(function(event) {
        	toggleEventDetails();
        });

        $('#backToEvents').click(function(event) {
        	toggleEventDetails();
        });
	});
}(document, window, jQuery));