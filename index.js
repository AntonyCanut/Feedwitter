var Feedly = require('feedly');
var parse = require('json-parse')

var f = new Feedly({
  client_id: 'sandbox',
  client_secret: '1QA6I3662OW2KEG48WA6',
  base: 'http://sandbox.feedly.com',
  port: 8080
});

var articles = [];

f.searchFeeds("Microsoft", 20, function(error, feed){
// console.log(feed.results.title);
  feed.results.forEach(function(item){
    // articles.push(item);
    console.log(item.title + ", score : " + item.score);
  });
});

console.log("feed");
