var User = Parse.Object.extend('user');
var query = new Parse.Query(User);
query.find({
  success: function(results) {
    debugger;
  },
  error: function(error) {
    console.log(error);
  } // this will log any error if there is one
})

