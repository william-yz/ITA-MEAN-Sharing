'use strict'

const http = require('http')
const qs = require('querystring')
const fs = require('fs')


http.createServer((req, res) => {
  var url = require('url').parse(req.url),
      path = url.pathname
  if (req.method === 'GET') {
    if (path === '/home') {
      res.setHeader('Content-Type', 'text/html')
      fs.createReadStream('./index.html').pipe(res)
    } else if (path === '/login') {
      res.setHeader('Content-Type', 'text/html')
      fs.createReadStream('./login.html').pipe(res)
    } else if (path === '/doLogin'){
      console.log();
      res.setHeader('Content-Type', 'text/html')
      const user = qs.parse(url.query).user
      fs.readFile('./success.html', (err, content) => {
        res.end(content.toString().replace(/\${(.*)}/, user))
      })
    } else {
      res.statusCode = '404';
      res.end();
    }
  }

}).listen(3000, () => {
  console.log('Server start, port : 3000');
})
