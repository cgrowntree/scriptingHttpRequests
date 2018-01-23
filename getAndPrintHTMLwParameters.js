var https = require('https');

function getAndPrintHTML (options) {

  https.get(options, function (response) {

    response.setEncoding('utf8');
    var fullContent = "";

    response.on('data', function (data) {
      fullContent += data;
    });

    response.on('end', function() {
      console.log(fullContent);
    });

  });

}

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(options);