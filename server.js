'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())


app.set('view engine', 'ejs')
app.set('views', './')

app.use((req, res, next) => {
  if (req.cookies.itauser) {
    req.body= {user : req.cookies.itauser};
    next()
  } else {
    if (req.path !== '/login' && req.path !== '/doLogin') {
      res.redirect('/login');
    } else {
      next()
    }
  }
})
app.get('/home', (req, res) => {
  res.render('success.ejs', {user : req.body.user})
})

app.get('/login', (req, res) => {
  res.sendFile(__dirname +'/login.html')
})

app.route('/doLogin')
  .post((req, res) => {
  res.cookie('itauser', req.body.user)
  res.render('success.ejs', {user : req.body.user})
})


app.listen(3000, () => {
  console.log('Server Start')
})
