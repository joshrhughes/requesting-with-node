'use strict'

const keys = require("./env");
// const apiKey = keys.apiKey;
// const iD = keys.iD;
const request = require('request');
//const apiUrl ='https://www.googleapis.com/customsearch/v1?key='+keys.apiKey+'&cx='+keys.iD+'&q=face+off+movie';
//const apiUrl ='https://www.googleapis.com/customsearch/v1?key='+keys.apiKey+'&cx='+keys.iD+'&q='+film;
//console.log(apiUrl);
function get(film) {
  request('https://www.googleapis.com/customsearch/v1?key=' + keys.apiKey + '&cx=' + keys.iD + '&q=' + film, function (error, response, body) {
  // Inside that callback

 console.log('error:', error); // Print the error if one occurred
 console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
 console.log('body:', body);
  
  
});
}
//console.log(apiUrl);
module.exports = get;

