module.exports = function getHTML (options, callback) {
  var https = require('https');

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
};