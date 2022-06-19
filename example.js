/*
// node js module system own module
// transfer data one file to another file
// 1
module.exports = arr; // single data export
// 2
module.exports = { arr, fun, value }; // multiple data export with same name
// 3
module.exports = {
  arr1: arr,
  fun2: fun,
  value3: value,
}; // multiple data export with different name 

//  require file
const catchData = require("./"); // data catch any type single or object type
*/
// .
// .
// .
// .
// .
// .
/*
// read file asynchronously
fs.readFile('./txt/read.txt', 'utf-8', (err, data) => {});

// write file asynchronously
fs.writeFile('2pac.txt', 'my text', (err) => {
  if (err) throw err;
  console.log('Lyric saved!');
});

// read file synchronously
fs.readFileSync('./txt/read.txt', 'utf-8'); // console.log Importent

// write file synchronously
fs.writeFileSync('./txt/new.txt', 'my text');
*/
// .
// .
// .
// .
// .
// .
/*
// events module
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener'); // Helloooo! first listener
});

// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
}); // event with parameters 1, 2 in second listener

// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
}); // event with parameters 1, 2, 3, 4, 5 in third listener

myEmitter.emit('event', 1, 2, 3, 4, 5);
*/
// .
// .
// .
// .
// .
// .
/*
// event module for use export and requier
//app.js
const School = require('./mod');
const school = new School();

school.on('action', () => {
  console.log('man is mortal');
});
school.startPeriod();

//mod.js
const EventEmitter = require('events');

class School extends EventEmitter {
  startPeriod() {
    console.log('start function...');

    setTimeout(() => {
      this.emit('action');
    }, 2000);
  }
}
module.exports = School;
*/
// .
// .
// .
// .
// .
// .
/*
// http module for create simple server
const http = require('http');

let serverr = http.createServer((req, res) => {
  res.write('hello world');
  res.end();
});

serverr.listen('5000', '127.0.0.1', () => {
  console.log('server is running......');
});
*/
// .
// .
// .
// .
// .
// .
/*
// http module for create simple server with verious pages
const http = require('http');

const server = http.createServer((req, res) => {
  let path = req.url;
  if (path === '/') {
    res.write('home_page');
    res.end();
  } else if (path === '/about') {
    res.write('about_page');
    res.end();
  } else {
    res.write('defult_page');
    res.end();
  }
});

server.listen('5000', '127.0.0.1', () => {
  console.log('server is running......'); //console massage
});
*/
// .
// .
// .
// .
// .
// .
/*
// fs module but streem and buffer mode transfer data using strem chunk
// createReadStrem
const fs = require('fs');

const ownReadStreem = fs.createReadStream('./txt/bigData.txt', 'utf-8');
//fs.createReadStream(`${__dirname}/txt/bigData.txt`,'utf-8');

ownReadStreem.on('data', (chunk) => {
  console.log(chunk);
});
*/
// .
// .
// .
// .
// .
// .
// Node.js Stream & Buffer
// Node.js Stream
/*
const http = require('http');

const server = http.createServer((req, res) => {
  const path = req.url;

  if (path === '/') {
    res.write(`
    <!DOCTYPE html>
      <body>
        <form action="/process" method="post">
          <input type="text" name = "message" />
        </form>
      </body>
    </html>
    `);
    res.end();
  } else if (path === '/process' && req.method === 'POST') {
    req.on('data', (chunk) => {
      console.log(chunk);
    });
    res.write('Operation success...');
    res.end();
  } else {
    res.write('not found........');
    res.end();
  }
});

server.listen('8000', '127.0.0.1', (err) => {
  if (!err) {
    console.log('server is running.....');
  }
});
*/
// .
// .
// .
// .
// .
// .
// Node.js Stream & Buffer
// Node.js Buffer
/*
const http = require('http');

const server = http.createServer((req, res) => {
  const path = req.url;
  const forms = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>form</title>
    </head>
    <body>
      <form action="/process" method="post">
        <input type="text" name="massege" />
      </form>
    </body>
  </html>
  `;
  if (path === '/') {
    res.write(forms);
    res.end();
  } else if (path === '/process' && req.method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
      console.log('chunk finished');
    });
    req.on('end', () => {
      console.log('end process finished');
      const perseData = Buffer.concat(body).toLocaleString();
      console.log(perseData);
    });
    res.write('thank you for submitting...');
    res.end();
  }
});

server.listen('8000', '127.0.0.1', (err) => {
  if (!err) {
    console.log('server is running.....');
  }
});
*/
// .
// .
// .
// .
// .
// .
// fs module but streem and buffer mode Create file using Writestrem using chunk
// createWriteStrem
/*
const fs = require('fs');

const ownReadFile = fs.createReadStream('./txt/bigData.txt');
const ownWriteFile = fs.createWriteStream('./txt/new.txt');

ownReadFile.on('data', (chunk) => {
  ownWriteFile.write(chunk);
});
*/
// .
// .
// .
// .
// .
// .
// fs module but streem and buffer mode Create file using Writestrem using chunk
// createWriteStrem using pipe() method
/*
const fs = require('fs');

const ownRead = fs.createReadStream('./txt/bigdata.txt');
const ownWrite = fs.createWriteStream('./txt/new.txt');

ownRead.pipe(ownWrite);
*/
