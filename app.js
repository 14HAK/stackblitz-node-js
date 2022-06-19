const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const ownReadFile = fs.createReadStream(`${__dirname}/txt/bigData.txt`);
  ownReadFile.pipe(res);
});

server.listen('8000', '127.0.0.1', (err) => {
  if (!err) {
    console.log('server running....');
  }
});
