const http = require('http');

const server = http.createServer((req, res) => {
  const path = req.url;

  if (path === '/') {
    res.write(`<!DOCTYPE html>
    <html lang="en">
      <head>
      </head>
      <body>
        <form action="/process" method="post">
          <input type="text" name = "message" />
        </form>
      </body>
    </html>`);
    res.end();
  } else if (path === '/process' && req.method === 'POST') {
    req.on('data', (chunk) => {
      console.log(chunk);
    });
    res.write('here');
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
