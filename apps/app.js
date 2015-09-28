$(document).ready(function({
  $(function(){
    $('query').on("submit", function(e){
      e.preventDefault();
    var request = gapi.client.youtube.search.list({
        part: "snippet",
        type: "video",
        q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
        maxResults: 3,
      });
        
        
    });
  });
  
});
