const fs = require('fs');
// const ownread = fs.createReadStream('./txt/bigData.txt');

// ownread.on('data', (chunk) => {
//   console.log(chunk);
// });
//
//
// const datas = 'man is mortal man dbfuyer asjndbwjher ABDWUE';
// const ownwrite = fs.createWriteStream('./txt/new2.txt');

// ownwrite.write(datas, (err) => {
//   if (!err) {
//     console.log('operation Compleate......');
//   }
// });
const http = require('http');
const { all1 } = require('');

const server = http.createServer((req, res) => {
  const ownread = fs.createReadStream(`${__dirname}/txt/bigData.txt`);
  ownread.pipe(res);
});

server.listen('8000', '127.0.0.1', (err) => {
  if (!err) {
    console.log('server is running....');
  }
});
