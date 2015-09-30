
/*
  $(function(){
    $('query').on("submit", function(e){
      e.preventDefault();
    var request = gapi.client.youtube.search.list({
        part: "snippet",
        type: "video",
        q: encodeURIComponent($("#query").val()).replace(/%20/g, "+"),
        maxResults: 3,
      });
        
        
    });
  });
*/
  
/*
var myResults;

for(i = 0; i < results.items.length; i++){
    myResults = myResults + "<div> <img src='" + results.items[i].snippet.urlthing + "'></div>";
}

$('#search-container').html(myResults);

*/

$(document).ready(function(){
	$('#search-button').click(function(e){
		var search = $('#query').val()
		console.log(search);
		query(search);
		});
});

function query(search){
	$(function(){
		  $.getJSON('https://www.googleapis.com/youtube/v3/search/?part=snippet&key=AIzaSyDyGOBDSVBpRkUfoQOhrZLPQLZtK4PNTGc&q=' + search, function(data){
		    showResults(data);
		    
		  });
		});
	
		function showResults(results){
		console.log(results); 
		$('#search-results').html('<img src="' + results.items[0].snippet.thumbnails.default.url + '">' );
		}
}




