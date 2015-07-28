$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
  $.get("https://www.googleapis.com/youtube/v3/search", { api_key: "AIzaSyCNHy4CD-Qdd_VUTQ2kh-0X_-3GyIYDCEc", part: "snippet", q: "coding" }, 
    function(data){
      console.log(data);
    });
});

function getRequest(searchTerm){
  var params = {
    s: searchTerm,
    r: 'json'
  };
  url = 'http://www.omdbapi.com';

  $.getJSON(url, params, function(data){
    showResults(data.Search);
  });
}

function showResults(results){
  var html = "";
  $.each(results, function(index,value){
    html += '<p>' + value.Title + '</p>';
    console.log(value.Title);
  });
  $('#search-results').html(html);
}