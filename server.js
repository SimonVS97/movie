const http = require('http'),
fs = require('fs'),
url = require('url');


http.createServer((request, response) => {
  // copying of url
  let addr = request.url;
  // parsing url, now we have an object that contains the different parts of the url
  let q = url.parse(addr, true);
  // create filePath of the file to be returned
  let filePath='';

  // fs.appendFile (path, data, callback)
  // appends given data to a file, file is specified in path
  // callback function is executed when method is executed
  // appends date from request
  fs.appendFile('log.txt', 'URL: ' + addr + '\nTimestamp: ' + new Date() + '\n\n', (err) =>
     {
       if (err) {
         console.log(err);
       } else {
         console.log('Added to log.');
       }
     });
  
  // setting filePath to either documentation or index
  if (q.pathname.includes('documentation')) {
    filePath = (__dirname + '/documentation.html');
  } else {
    filePath = 'index.html';
  }

  // reads file according to filePath
  // data contains the contents of the read file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      throw err;
    }

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(data);
    response.end();
  });
  
}).listen(8080);

console.log('My fist Node test server is running on Port 8080.');



