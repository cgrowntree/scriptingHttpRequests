var https = require('https');

function getHTML (options, callback) {

  https.get(options, function (response) {

    response.setEncoding('utf8');
    var fullContent = "";

    response.on('data', function (data) {
      fullContent += data;
    });

    response.on('end', function() {
      callback(fullContent);
    });

  });

}

var printHTML = function (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);