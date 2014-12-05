var Url = Parse.Object.extend('urls');
var query = new Parse.Query(Url);
query.find({
  success: function(results) {
    _.each(results, function(item, index) {
      var url = item.attributes.url;
      var id = item.id
      $('#url-listing').append(
        '<li><a href="' + url + '">Image Link</a>' + '<img src="' + url + '"/>' + '<button id="remove-' + id + '">Remove</button>'+ '</li>'
      )
      $('#remove-' + id).click(function(e) {
        e.preventDefault();
        item.destroy({
          success: function(item) {
            alert('item successfully deleted');
            window.location.reload();
          },
          error: function(item, error) {
            alert('looks like something went wrong');
          }
        })
      })
    })
  },
  error: function(error) {
    console.log(error);
  }
});

