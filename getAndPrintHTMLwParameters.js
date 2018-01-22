var https = require('https');

function getAndPrintHTML (options) {

  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      console.log('Data:', data);
    });

  });

}

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(options);