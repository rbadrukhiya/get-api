var http = require('http')
var url = require('url');
var requests = require('requests');
http.createServer(function (req, res) {k

    res.end('hello')
    if (req.url == '/') {

        requests('https://dummyjson.com/products')
            .on('data', function (chunk) {
                var obj = JSON.parse(chunk)
               console.log(obj.products[0].id);
               
            })
            .on('end', function (err) {
                if (err) return console.log('connection closed due to errors', err);
                console.log('end');
            });
    }
    else if (req.url == '/blog') {
        console.log('blog page');
    }
}).listen(3030)