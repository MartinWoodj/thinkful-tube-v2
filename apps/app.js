$(document).ready(function(){
	$('.search-button').click(function(e){
		var search = $('.query').val()
		console.log(search);
		query(search);
	});
});

function query(search){
	$.getJSON('https://www.googleapis.com/youtube/v3/search/?part=snippet&key=AIzaSyDyGOBDSVBpRkUfoQOhrZLPQLZtK4PNTGc&q=' + search,
	function(data){
		showResults(data.items);
	});
};

function showResults(results){
	console.log(results);
	var myResults = ''
	for(i = 0; i < results.length; i++){
		myResults += [
			"<div>",
				"<a href='http://youtube.com/watch?v=" + results[i].id.videoId +"'>",
					"<img src='" + results[i].snippet.thumbnails.default.url + "'>",
				"</a>",
			"</div>"
		].join('');
	}
	console.log(myResults);
	$('#search-results').html(myResults);
}