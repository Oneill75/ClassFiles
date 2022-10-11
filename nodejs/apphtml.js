const http = require('http');
const fs = require('fs');


fs.readFile('./html/index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHead(200, {"Content-Type": "text/plain"});  
        response.write(html);  
        response.end();  
    }).listen(8000);
});