"use strict";
var http = require("http");

function getJSON (opt, cb) {
  http.request(options, function(res) {
    var body = "";

    res.on("data", function(chunk) {
      body += chunk;
    });

    res.on("end", function() {
      var result = JSON.parse(body);
      cb(null, result);
    });

    res.on("error", cb);
  })
  .on("error", cb)
  .end();
}

var options = {
  host: "URL_HTTP",
  port: 80,
  path: "/v1/url/params",
  method: "GET"
};

getJSON(options, function(err, result) {
  if (err) {
    return console.log("Error while trying to get", err);
  }

  console.log(result);
});
