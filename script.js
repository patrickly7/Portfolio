$(document).ready( function() {
	$("#langpic").mouseenter( function() {
		$("#langpic").fadeTo('slow', 0)
	});
	$("#langpic").mouseleave( function() {
		$("#langpic").fadeTo('slow', 1)
	});
});