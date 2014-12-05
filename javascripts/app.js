var Url = Parse.Object.extend('urls');
var url = new Url();


$('#meme-submission').submit(function(e) {
  e.preventDefault();

  var userInput = $('[name="url"]').val();
  url.set('url', userInput);

  url.save(null, {
    success: function(url) {
      alert('yay!')
    },
    error: function(url, err) {
      alert('oh no')
    }
  })
});
