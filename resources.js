$(document).ready(function () {
 
	$('#retrieve-resources').click(function () {
		var displayResources = $('#display-resources');
		displayResources.text('Loading data from JSON source...');
 
		$.ajax({
			dataType: 'json',
			type: "GET",
			url: "resources.json",
			success: function(result){
				var output="<article>";
				for (var i in result){
					output+="<div id=\"img\"><img src=\"img/" + result[i].img + "\"></div>";
					output+="<section id=\"content\">"+ "<h4>"+ result[i].date + "</h4>" + "<h1>"  + result[i].title +"</h1>" + "<p>"+ result[i].description + "</p>"+"<div id=\"smallimg\"><img src=\"img/" + result[i].img + "\"></div>" + "</section>";
				}
				displayResources.html(output);
				$("section").addClass("line");
			}
		});
	});
});