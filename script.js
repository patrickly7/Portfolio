$(document).ready( function() {
	$("#langpic1, #langpic2, #langpic3, #langpic4").mouseenter( function() {
		$("#langpic1, #langpic2, #langpic3, #langpic4").fadeTo('slow', 0)
	});
	$("#langpic1, #langpic2, #langpic3, #langpic4").mouseleave( function() {
		$("#langpic1, #langpic2, #langpic3, #langpic4").fadeTo('slow', 1)
	});
});