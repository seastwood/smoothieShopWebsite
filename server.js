const http = require('http');
const fs = require('fs');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const express = require('express');
const app = express();

const hostname = '172.31.4.141';
const port = 80;

// serve static files in the public directory
app.use(express.static('public'));

// start the server
const server = http.createServer(app);

const sessionMiddleware = session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false,
  store: new FileStore({
    path: './sessions',
  }),
});

app.use(sessionMiddleware);

app.use((req, res, next) => {
  console.log(`Request for ${req.url} by method ${req.method}`);
  if (req.url === '/cart') {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (!cart) {
      cart = [];
    }
    if (req.method === 'POST') {
      let data = '';
      req.on('data', chunk => {
        data += chunk;
      });
      req.on('end', () => {
        const item = JSON.parse(data);
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ success: true, cartItems: cart }));
      });
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ success: true, cartItems: cart }));
    }
  } else {
    let fileUrl = req.url;
    if (fileUrl === '/') {
      fileUrl = '/index.html';
    }

    const filePath = path.resolve(`.${fileUrl}`);
    const fileExt = path.extname(filePath);

    if (fileExt === '.html' || fileExt === '.css' || fileExt === '.jpg' || fileExt === '.jpeg' || fileExt === '.png' || fileExt === '.gif' || fileExt === '.js') {
      fs.exists(filePath, (exists) => {
        if (!exists) {
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/html');
          res.end(`<html><body><h1>Error 404: ${fileUrl} not found</h1></body></html>`);
          return;
        }

        res.statusCode = 200;
        if (fileExt === '.html') {
          res.setHeader('Content-Type', 'text/html');
        } else if (fileExt === '.css') {
          res.setHeader('Content-Type', 'text/css');
        } else if (fileExt === '.jpg' || fileExt === '.jpeg') {
          res.setHeader('Content-Type', 'image/jpeg');
        } else if (fileExt === '.png') {
          res.setHeader('Content-Type', 'image/png');
        } else if (fileExt === '.gif') {
          res.setHeader('Content-Type', 'image/gif');
        } else if (fileExt === '.js') {
          res.setHeader('Content-Type', 'application/javascript');
        }
        fs.createReadStream(filePath).pipe(res);
      });
    } else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html');
      res.end(`<html><body><h1>Error 404: ${fileUrl} not supported</h1></body></html>`);
    }
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});