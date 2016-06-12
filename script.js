$(document).ready( function() {
	$("#langpic").mouseenter( function() {
		$("#cssinfo").fadeTo('slow', 0)
	});
	$("#langpic").mouseleave( function() {
		$("#cssinfo").fadeTo('slow', 1)
	});
});