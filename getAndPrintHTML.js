var https = require('https');  

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');
    var newArr = [];

    response.on('data', function (data) {
      newArr.push(data);
    });

    response.on('end', function() {
      console.log(newArr.join(''));
    });

  });

}

getAndPrintHTML();