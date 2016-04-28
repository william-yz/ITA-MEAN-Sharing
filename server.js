'use strict'

const http = require('http')
const qs = require('querystring')

http.createServer((req, res) => {
  var url = require('url').parse(req.url),
      path = url.pathname
      console.log(path);
  if (req.method === 'GET') {
    if (path === '/home') {
      res.setHeader('Content-Type', 'text/html')
      res.end(`
        <a href="/login">Login</a>
        `)
    } else if (path === '/login') {
      res.setHeader('Content-Type', 'text/html')
      res.end(`
        <html>
          <body>
            <form action="/doLogin" method="get">
              User : <input name="user">
              <input type="submit">
            </form>
          </body>
        </html>
        `)
    } else if (path === '/doLogin'){
      console.log();
      res.setHeader('Content-Type', 'text/html')
      res.end(`
        <html>
          <body>
            Hi, ${qs.parse(url.query).user}! Login Success
          </body>
        </html>
        `)
    } else {
      res.statusCode = '404';
      res.end();
    }
  }

}).listen(3000, () => {
  console.log('Server start, port : 3000');
})
