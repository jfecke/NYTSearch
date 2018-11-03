var beginDate = "20180101"
var endDate = "20181103"
var searchItem = "Test"
var records = 0


var APICall = function (){

    
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "7592444e124b45fca4cd82adcfd0fbef",
  'q': searchItem,
  'begin_date': beginDate,
  'end_date': endDate,
  'page': 0
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
  var response = results.response.docs
    for (var i = 0; i < records; i++){
        var headline = response.headline
        var url = response.web_url
        var byLine = response.byLine
        var summary = response.snippet
        var newDiv = $("<div>")
        var title = $('<p>').text("Headline: " + headline)
        var webURL = $('<p>').text("URL " + url)
        var author = $("<p>").text("By: " + byLine)
        var snippet = $("<p>").text("Snippet: "  + summary)
        newDiv.append(title, author, snippet, webURL)
    }
}).fail(function(err) {
  throw err;
});
}

APICall()

// $("#search").on("click", function(){
//     searchItem = $("#searchTerm").val()
//     endDate = $("#endDateTest").val()
//     beginDate = $("#beginDateTest").val()
//     records = $("#numberOfRecords").val()
//     APICall(

//     )
// })