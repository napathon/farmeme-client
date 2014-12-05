var Url = Parse.Object.extend('urls');
var query = new Parse.Query(Url);
query.find({
  success: function(results) {
    _.each(results, function(value, key) {
      $('#url-listing').append(
        '<li>' + value.attributes.url + '</li>'
      )
    })
  },
  error: function(error) {
    console.log(error);
  } // this will log any error if there is one
});

