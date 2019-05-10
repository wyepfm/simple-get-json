"use strict";
var http = require("http");
var timeStamp = "";
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
  host: "10.67.1.172",
  port: 80,
  path: "/jsonapi/node/article?sort=-revision_timestamp",
  method: "GET"
};

function checkTimestamp(){
  getJSON(options, function(err, result) {
    if (err) {
      console.log("Error while trying to get", err);
      setTimeout(function(){ checkTimestamp(); }, 3000);   
    }
    if (timeStamp != result.data[0].attributes.changed){
      timeStamp = result.data[0].attributes.changed;
      console.log(timeStamp);
      setTimeout(function(){ checkTimestamp(); }, 3000);
    } else {
      console.log(timeStamp);
      setTimeout(function(){ checkTimestamp(); }, 3000);
    }
  });
}
checkTimestamp();
