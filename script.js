$(document).ready( function() {
	$("#mainPageContent").mouseenter( function() {
		$("#mainPageContent").fadeTo('slow', 0)
	});
	$("#mainPageContent").mouseleave( function() {
		$("#mainPageContent").fadeTo('slow', 1)
	});
});