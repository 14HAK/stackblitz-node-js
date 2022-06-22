const http = require('http');

const app = {};

app.configure = {
  port: '8000',
  host: '127.0.0.1',
};

app.creatserver = () => {
  let server = http.createServer(app.handleReqRes);
  server.listen(app.configure.port, app.configure.host, (err) => {
    if (!err) {
      console.log('Server Running......');
    }
  });
};

app.handleReqRes = (req, res) => {
  res.end('Hello World!');
};

app.creatserver();
