var Url = Parse.Object.extend('urls');
var query = new Parse.Query(Url);
query.find({
  success: function(results) {
    _.each(results, function(value, key) {
      var url = value.attributes.url;
      $('#url-listing').append(
        '<li>' + url + '<img src="' + url + '"/>' + '</li>'
      )
    })
  },
  error: function(error) {
    console.log(error);
  } // this will log any error if there is one
});

