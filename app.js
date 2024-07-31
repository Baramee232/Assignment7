//01
const express = require('express')
const app = express()
console.log("Hello World")
console.log("Bye World...")
app.get('/deeja', function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var txt = "Name : " + req.query.Name + "<br/> Login Data : " + req.query.date + ""+ req.query.month + ","+ req.query.year;
    // res.send("Hello World <br/>Bye World...")
    res.end(txt);
    })
app.listen(9999,function(){

console.log("Server is running on PORT 9999")

})
// // // http://localhost:9999/deeja?Name=Baramee%20Saiphan&date=1&month=May&year=2002 // // //

// //02
//  let http = require('http');
//  let url = require('url');
 
//  http.createServer(function (req, res) {
//  res.writeHead(200, {'Content-Type': 'text/html'});
//  /*Use the url module to turn the querystring into an object:*/
//  var q = url.parse(req.url, true).query;
//  /*Return the year and month from the query object:*/
//  var txt = q.year + " " + q.month;
//  res.end(txt);
//  }).listen(9999);

// //03
//  let http = require('http');
//  let url = require('url');
 
//  http.createServer(function (req, res) {
//  res.writeHead(200, {'Content-Type': 'text/html'});
//  /*Use the url module to turn the querystring into an object:*/
//  var q = url.parse(req.url, true).query;
//  /*Return the year and month from the query object:*/
//  var txt = "Name : " + q.Name + "<br/> Login Data : " + q.date + ""+ q.month + ","+ q.year;
//  res.end(txt);
//  }).listen(9999);
 // // // http://localhost:9999/?year=2002&month=May&date=1&Name=Baramee%20Saiphan // // // วันเกิด