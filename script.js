$(document).ready( function() {
	$("#cssinfo").mouseenter( function() {
		$("#cssinfo").fadeTo('slow', 0)
	});
	$("#cssinfo").mouseleave( function() {
		$("#cssinfo").fadeTo('slow', 1)
	});
});