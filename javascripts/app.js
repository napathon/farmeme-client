var validateSubmission = function(form) {
  $(form).validate({
    rules: {
      'url': {
        required: true,
        url: true
      }
    }
  })
};

var Url = Parse.Object.extend('urls');
var url = new Url();
var form = $('form#meme-submission');

form.submit(function(e) {
  validateSubmission(this);
  e.preventDefault();
  if ($(this).valid()) {
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
  }
});
